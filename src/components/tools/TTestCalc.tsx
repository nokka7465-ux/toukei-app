"use client";

import { useMemo, useState } from "react";
import { Field, NumberInput, Result } from "./toolPrimitives";
import {
  runTTest,
  T_TEST_PRESETS,
  type TTestInput,
  type TestKind,
  type TestSide,
} from "@/lib/tools/t-test";

type State = {
  kind: TestKind;
  // 1標本
  mean: number;
  sd: number;
  n: number;
  mu0: number;
  // 対応なし2標本
  mean1: number;
  sd1: number;
  n1: number;
  mean2: number;
  sd2: number;
  n2: number;
  // 対応あり
  meanDiff: number;
  sdDiff: number;
  nPaired: number;
  // 共通
  alpha: number;
  side: TestSide;
};

const DEFAULT_STATE: State = {
  kind: "one-sample",
  mean: 105,
  sd: 15,
  n: 30,
  mu0: 100,
  mean1: 72,
  sd1: 10,
  n1: 25,
  mean2: 68,
  sd2: 12,
  n2: 28,
  meanDiff: -8,
  sdDiff: 12,
  nPaired: 20,
  alpha: 0.05,
  side: "two",
};

export function TTestCalc() {
  const [s, setS] = useState<State>(DEFAULT_STATE);

  const upd = <K extends keyof State>(key: K, value: State[K]) =>
    setS((prev) => ({ ...prev, [key]: value }));

  const result = useMemo(() => {
    const input: TTestInput =
      s.kind === "one-sample"
        ? {
            kind: "one-sample",
            mean: s.mean,
            sd: s.sd,
            n: Math.max(2, Math.round(s.n)),
            mu0: s.mu0,
            alpha: s.alpha,
            side: s.side,
          }
        : s.kind === "two-sample"
          ? {
              kind: "two-sample",
              mean1: s.mean1,
              sd1: s.sd1,
              n1: Math.max(2, Math.round(s.n1)),
              mean2: s.mean2,
              sd2: s.sd2,
              n2: Math.max(2, Math.round(s.n2)),
              alpha: s.alpha,
              side: s.side,
            }
          : {
              kind: "paired",
              meanDiff: s.meanDiff,
              sdDiff: s.sdDiff,
              n: Math.max(2, Math.round(s.nPaired)),
              alpha: s.alpha,
              side: s.side,
            };
    return runTTest(input);
  }, [s]);

  const applyPreset = (id: string) => {
    const preset = T_TEST_PRESETS.find((p) => p.id === id);
    if (!preset) return;
    const i = preset.input;
    setS((prev) => {
      const next = { ...prev, alpha: i.alpha, side: i.side, kind: i.kind };
      if (i.kind === "one-sample") {
        next.mean = i.mean;
        next.sd = i.sd;
        next.n = i.n;
        next.mu0 = i.mu0;
      } else if (i.kind === "two-sample") {
        next.mean1 = i.mean1;
        next.sd1 = i.sd1;
        next.n1 = i.n1;
        next.mean2 = i.mean2;
        next.sd2 = i.sd2;
        next.n2 = i.n2;
      } else {
        next.meanDiff = i.meanDiff;
        next.sdDiff = i.sdDiff;
        next.nPaired = i.n;
      }
      return next;
    });
  };

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">t 検定計算機</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          1 標本・対応なし 2 標本(Welch)・対応あり 2 標本の t 検定を実行します。t 値・自由度・p 値・95% 信頼区間を同時に表示。
        </p>
      </header>

      {/* 検定の種類 */}
      <div className="flex gap-2 ui-sans text-xs mb-3 flex-wrap">
        {(
          [
            ["one-sample", "1 標本"],
            ["two-sample", "対応なし 2 標本"],
            ["paired", "対応あり 2 標本"],
          ] as const
        ).map(([k, label]) => (
          <button
            key={k}
            type="button"
            onClick={() => upd("kind", k)}
            className={`px-3 py-1 rounded border transition ${
              s.kind === k
                ? "bg-[var(--accent)] text-[var(--accent-fg)] border-[var(--accent)] font-bold"
                : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* プリセット */}
      <div className="ui-sans text-xs mb-4">
        <span className="text-[var(--muted-strong)] block mb-1">
          例題プリセット
        </span>
        <div className="flex gap-2 flex-wrap">
          {T_TEST_PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => applyPreset(p.id)}
              title={p.description}
              className="px-3 py-1 rounded border border-[var(--page-border-strong)] hover:bg-[var(--background)] hover:text-[var(--link)]"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* 入力フィールド */}
      {s.kind === "one-sample" && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Field label="標本平均 x̄">
            <NumberInput value={s.mean} onChange={(v) => upd("mean", v)} step={0.1} />
          </Field>
          <Field label="標本 SD">
            <NumberInput
              value={s.sd}
              onChange={(v) => upd("sd", v)}
              step={0.1}
              min={0.001}
            />
          </Field>
          <Field label="サンプル数 n">
            <NumberInput
              value={s.n}
              onChange={(v) => upd("n", Math.max(2, Math.round(v)))}
              step={1}
              min={2}
            />
          </Field>
          <Field label="帰無仮説 μ₀">
            <NumberInput value={s.mu0} onChange={(v) => upd("mu0", v)} step={0.1} />
          </Field>
        </div>
      )}

      {s.kind === "two-sample" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <Field label="群1 平均 x̄₁">
            <NumberInput value={s.mean1} onChange={(v) => upd("mean1", v)} step={0.1} />
          </Field>
          <Field label="群1 SD">
            <NumberInput
              value={s.sd1}
              onChange={(v) => upd("sd1", v)}
              step={0.1}
              min={0.001}
            />
          </Field>
          <Field label="群1 n">
            <NumberInput
              value={s.n1}
              onChange={(v) => upd("n1", Math.max(2, Math.round(v)))}
              step={1}
              min={2}
            />
          </Field>
          <Field label="群2 平均 x̄₂">
            <NumberInput value={s.mean2} onChange={(v) => upd("mean2", v)} step={0.1} />
          </Field>
          <Field label="群2 SD">
            <NumberInput
              value={s.sd2}
              onChange={(v) => upd("sd2", v)}
              step={0.1}
              min={0.001}
            />
          </Field>
          <Field label="群2 n">
            <NumberInput
              value={s.n2}
              onChange={(v) => upd("n2", Math.max(2, Math.round(v)))}
              step={1}
              min={2}
            />
          </Field>
        </div>
      )}

      {s.kind === "paired" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <Field label="差の平均 d̄">
            <NumberInput
              value={s.meanDiff}
              onChange={(v) => upd("meanDiff", v)}
              step={0.1}
            />
          </Field>
          <Field label="差の SD">
            <NumberInput
              value={s.sdDiff}
              onChange={(v) => upd("sdDiff", v)}
              step={0.1}
              min={0.001}
            />
          </Field>
          <Field label="ペア数 n">
            <NumberInput
              value={s.nPaired}
              onChange={(v) => upd("nPaired", Math.max(2, Math.round(v)))}
              step={1}
              min={2}
            />
          </Field>
        </div>
      )}

      {/* α と 検定方向 */}
      <div className="grid grid-cols-2 gap-3 mt-3">
        <Field label="有意水準 α" unit="例: 0.05">
          <NumberInput
            value={s.alpha}
            onChange={(v) => upd("alpha", v)}
            step={0.01}
            min={0.001}
            max={0.4999}
          />
        </Field>
        <div className="ui-sans">
          <span className="text-xs text-[var(--muted-strong)] mb-1 block">
            検定の方向
          </span>
          <div className="flex gap-2 mt-1">
            {(["two", "right", "left"] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => upd("side", d)}
                className={`px-3 py-1 rounded text-xs border transition ${
                  s.side === d
                    ? "bg-[var(--accent)] text-[var(--accent-fg)] border-[var(--accent)] font-bold"
                    : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
                }`}
              >
                {d === "two" ? "両側" : d === "right" ? "右側" : "左側"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {result.error ? (
        <p className="mt-4 text-xs text-red-600 ui-sans">{result.error}</p>
      ) : (
        <>
          <Result
            label="p 値"
            value={fmtP(result.pValue)}
            hint={`t = ${fmt(result.t, 3)} / df = ${fmt(result.df, 2)} / ${result.conclusion}`}
          />
          <div className="mt-3 grid grid-cols-2 gap-3 text-xs ui-sans tabular-nums">
            <div className="paper rounded p-3">
              <div className="text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] font-bold mb-1">
                差の点推定
              </div>
              <div className="text-base font-bold">
                {fmt(result.estimate, 4)}
              </div>
              <div className="text-[var(--muted-strong)] mt-1">
                SE = {fmt(result.stdError, 4)}
              </div>
            </div>
            <div className="paper rounded p-3">
              <div className="text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] font-bold mb-1">
                {((1 - s.alpha) * 100).toFixed(0)}% 信頼区間
              </div>
              <div className="text-base font-bold">
                [{fmt(result.ci[0], 4)}, {fmt(result.ci[1], 4)}]
              </div>
            </div>
          </div>
        </>
      )}
    </article>
  );
}

function fmt(v: number, digits: number): string {
  if (!Number.isFinite(v)) return "—";
  return v.toFixed(digits);
}

function fmtP(v: number): string {
  if (!Number.isFinite(v)) return "—";
  if (v < 1e-4) return v.toExponential(2);
  return v.toFixed(6);
}
