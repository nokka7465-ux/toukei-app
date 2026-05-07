"use client";

import { useMemo, useState } from "react";
import {
  Field,
  NumberInput,
  Result,
  DownloadButtons,
  toCsv,
} from "./toolPrimitives";
import {
  BAYES_PRESETS,
  computeBayes,
  type BayesPreset,
} from "@/lib/tools/bayes-update";

const COHORT = 10000;

export function BayesUpdateCalc() {
  // 入力は % で扱い、計算時に 0〜1 に変換する
  const [priorPct, setPriorPct] = useState(1); // 1%
  const [sensitivityPct, setSensitivityPct] = useState(99); // 99%
  const [fprPct, setFprPct] = useState(5); // 5%

  const result = useMemo(
    () =>
      computeBayes(
        {
          prior: priorPct / 100,
          sensitivity: sensitivityPct / 100,
          falsePositiveRate: fprPct / 100,
        },
        COHORT,
      ),
    [priorPct, sensitivityPct, fprPct],
  );

  const applyPreset = (p: BayesPreset) => {
    setPriorPct(p.prior * 100);
    setSensitivityPct(p.sensitivity * 100);
    setFprPct(p.falsePositiveRate * 100);
  };

  const posteriorPct = Number.isFinite(result.posterior)
    ? result.posterior * 100
    : NaN;

  const tp = Math.round(result.breakdown.truePositive);
  const fp = Math.round(result.breakdown.falsePositive);
  const fn = Math.round(result.breakdown.falseNegative);
  const tn = Math.round(result.breakdown.trueNegative);
  const totalPositive = tp + fp;

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">ベイズ更新計算機</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          事前確率・感度・偽陽性率から、検査陽性のときに本当に陽性である確率(事後確率)を計算します。
        </p>
      </header>

      {/* プリセット */}
      <div className="ui-sans text-xs mb-4">
        <span className="text-[var(--muted-strong)] block mb-2">
          シナリオプリセット
        </span>
        <div className="flex gap-2 flex-wrap">
          {BAYES_PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => applyPreset(p)}
              title={p.description}
              className="px-3 py-1 rounded border border-[var(--page-border-strong)] hover:bg-[var(--background)] hover:text-[var(--link)]"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Field label="事前確率 P(H)" unit="%">
          <NumberInput
            value={priorPct}
            onChange={setPriorPct}
            step={0.1}
            min={0}
            max={100}
          />
        </Field>
        <Field label="感度 P(E|H)" unit="%">
          <NumberInput
            value={sensitivityPct}
            onChange={setSensitivityPct}
            step={0.1}
            min={0}
            max={100}
          />
        </Field>
        <Field label="偽陽性率 P(E|¬H)" unit="%">
          <NumberInput
            value={fprPct}
            onChange={setFprPct}
            step={0.1}
            min={0}
            max={100}
          />
        </Field>
      </div>

      {result.error ? (
        <p className="mt-4 text-xs text-red-600 ui-sans">{result.error}</p>
      ) : (
        <>
          <Result
            label="事後確率 P(H|E)"
            value={`${posteriorPct.toFixed(2)}%`}
            hint={`P(H|E) = P(E|H)·P(H) / P(E)  /  P(E)=${(result.marginal * 100).toFixed(2)}% / 尤度比 LR+ = ${
              Number.isFinite(result.likelihoodRatio)
                ? result.likelihoodRatio.toFixed(2)
                : "∞"
            }`}
          />

          {/* 視覚化バー: 事前 → 事後 */}
          <div className="mt-4 ui-sans text-xs">
            <BarRow
              label="事前確率"
              valuePct={priorPct}
              tone="muted"
            />
            <BarRow
              label="感度(真陽性率)"
              valuePct={sensitivityPct}
              tone="ok"
            />
            <BarRow
              label="偽陽性率"
              valuePct={fprPct}
              tone="warn"
            />
            <BarRow
              label="事後確率"
              valuePct={Number.isFinite(posteriorPct) ? posteriorPct : 0}
              tone="accent"
              highlight
            />
          </div>

          {/* 内訳テーブル */}
          <div className="mt-5 paper rounded p-4 text-xs ui-sans">
            <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-bold mb-2">
              仮想 {COHORT.toLocaleString()} 人で考えると
            </div>
            <table className="w-full tabular-nums">
              <thead className="text-[var(--muted-strong)]">
                <tr>
                  <th className="text-left py-1">　</th>
                  <th className="text-right py-1">陽性判定</th>
                  <th className="text-right py-1">陰性判定</th>
                  <th className="text-right py-1">小計</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[var(--page-border)]">
                  <td className="py-1">本当に陽性</td>
                  <td className="text-right text-[var(--link)] font-bold">
                    {tp.toLocaleString()}
                  </td>
                  <td className="text-right">{fn.toLocaleString()}</td>
                  <td className="text-right">
                    {(tp + fn).toLocaleString()}
                  </td>
                </tr>
                <tr className="border-t border-[var(--page-border)]">
                  <td className="py-1">本当に陰性</td>
                  <td className="text-right text-red-600 font-bold">
                    {fp.toLocaleString()}
                  </td>
                  <td className="text-right">{tn.toLocaleString()}</td>
                  <td className="text-right">
                    {(fp + tn).toLocaleString()}
                  </td>
                </tr>
                <tr className="border-t border-[var(--page-border-strong)] font-bold">
                  <td className="py-1">小計</td>
                  <td className="text-right">{totalPositive.toLocaleString()}</td>
                  <td className="text-right">{(fn + tn).toLocaleString()}</td>
                  <td className="text-right">{COHORT.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-3 text-[var(--muted-strong)] leading-relaxed">
              陽性判定 {totalPositive.toLocaleString()} 件のうち真の陽性は {tp.toLocaleString()} 件 ⇒
              事後確率 ≒ {posteriorPct.toFixed(2)}%
            </p>
          </div>
          <div className="mt-3 flex justify-end">
            <DownloadButtons
              baseFilename="bayes-update"
              csv={toCsv([
                {
                  metric: "prior",
                  pct: priorPct,
                  prob: priorPct / 100,
                },
                {
                  metric: "sensitivity",
                  pct: sensitivityPct,
                  prob: sensitivityPct / 100,
                },
                {
                  metric: "false_positive_rate",
                  pct: fprPct,
                  prob: fprPct / 100,
                },
                {
                  metric: "marginal",
                  pct: result.marginal * 100,
                  prob: result.marginal,
                },
                {
                  metric: "posterior",
                  pct: posteriorPct,
                  prob: result.posterior,
                },
                {
                  metric: "likelihood_ratio",
                  pct: "",
                  prob: result.likelihoodRatio,
                },
              ])}
              json={{
                input: {
                  prior: priorPct / 100,
                  sensitivity: sensitivityPct / 100,
                  falsePositiveRate: fprPct / 100,
                },
                posterior: result.posterior,
                marginal: result.marginal,
                likelihoodRatio: result.likelihoodRatio,
                breakdown: result.breakdown,
              }}
            />
          </div>
        </>
      )}
    </article>
  );
}

function BarRow({
  label,
  valuePct,
  tone,
  highlight,
}: {
  label: string;
  valuePct: number;
  tone: "muted" | "ok" | "warn" | "accent";
  highlight?: boolean;
}) {
  const colorClass =
    tone === "accent"
      ? "bg-[var(--accent)]"
      : tone === "ok"
        ? "bg-emerald-500"
        : tone === "warn"
          ? "bg-amber-500"
          : "bg-[var(--muted)]";
  const w = Math.max(0, Math.min(100, valuePct));
  return (
    <div
      className={`flex items-center gap-3 py-1 ${highlight ? "font-bold" : ""}`}
    >
      <span className="w-32 shrink-0 text-[var(--muted-strong)]">{label}</span>
      <span className="flex-1 h-3 bg-[var(--background)] border border-[var(--page-border)] rounded overflow-hidden">
        <span
          className={`block h-full ${colorClass}`}
          style={{ width: `${w}%` }}
        />
      </span>
      <span className="w-16 text-right tabular-nums">
        {valuePct.toFixed(1)}%
      </span>
    </div>
  );
}
