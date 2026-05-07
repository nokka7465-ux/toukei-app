"use client";

import {
  Field,
  NumberInput,
  Result,
  ShareStateButton,
  normInv,
} from "./toolPrimitives";
import { useToolUrlState } from "@/lib/tool-state";

type State = {
  type: "mean" | "proportion";
  delta: number;
  sigma: number;
  p: number;
  alpha: number;
  power: number;
};

const DEFAULT_STATE: State = {
  type: "mean",
  delta: 0.5,
  sigma: 1,
  p: 0.5,
  alpha: 0.05,
  power: 0.8,
};

export function SampleSizeCalc() {
  const { state: s, setState: setS, getShareUrl } =
    useToolUrlState<State>(DEFAULT_STATE);

  const upd = <K extends keyof State>(key: K, value: State[K]) =>
    setS((prev) => ({ ...prev, [key]: value }));

  const za = normInv(1 - s.alpha / 2);
  const zb = normInv(s.power);

  let n = 0;
  let formula = "";
  if (s.type === "mean") {
    n = (2 * Math.pow(za + zb, 2) * s.sigma * s.sigma) / (s.delta * s.delta);
    formula = "n = 2(z_{α/2} + z_β)² σ² / δ²";
  } else {
    const variance = 2 * s.p * (1 - s.p);
    n = (Math.pow(za + zb, 2) * variance) / (s.delta * s.delta);
    formula = "n = (z_{α/2} + z_β)² · 2p(1-p) / δ²";
  }
  const nCeil = Math.ceil(n);

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">サンプルサイズ計算機</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          検出したい効果量・有意水準・検出力から、各群に必要な標本数を計算します。
        </p>
      </header>
      <div className="flex gap-2 ui-sans text-xs mb-4">
        {(["mean", "proportion"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => upd("type", t)}
            className={`px-3 py-1 rounded border transition ${
              s.type === t
                ? "bg-[var(--accent)] text-[var(--accent-fg)] border-[var(--accent)] font-bold"
                : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
            }`}
          >
            {t === "mean" ? "平均差" : "比率差"}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {s.type === "mean" ? (
          <>
            <Field label="検出したい平均差 δ">
              <NumberInput
                value={s.delta}
                onChange={(v) => upd("delta", v)}
                step={0.05}
                min={0.01}
              />
            </Field>
            <Field label="想定する標準偏差 σ">
              <NumberInput
                value={s.sigma}
                onChange={(v) => upd("sigma", v)}
                step={0.1}
                min={0.01}
              />
            </Field>
          </>
        ) : (
          <>
            <Field label="検出したい比率差 δ" unit="例: 0.05 = 5pt 差">
              <NumberInput
                value={s.delta}
                onChange={(v) => upd("delta", v)}
                step={0.01}
                min={0.001}
                max={0.5}
              />
            </Field>
            <Field label="想定する平均比率 p" unit="0〜1">
              <NumberInput
                value={s.p}
                onChange={(v) => upd("p", v)}
                step={0.05}
                min={0.01}
                max={0.99}
              />
            </Field>
          </>
        )}
        <Field label="有意水準 α(両側)" unit="例: 0.05">
          <NumberInput
            value={s.alpha}
            onChange={(v) => upd("alpha", v)}
            step={0.01}
            min={0.001}
            max={0.5}
          />
        </Field>
        <Field label="検出力 1−β" unit="例: 0.8">
          <NumberInput
            value={s.power}
            onChange={(v) => upd("power", v)}
            step={0.05}
            min={0.5}
            max={0.99}
          />
        </Field>
      </div>
      <Result
        label="必要な標本サイズ(各群)"
        value={`n ≥ ${nCeil}`}
        hint={`${formula}  /  z_{α/2}=${za.toFixed(3)}, z_β=${zb.toFixed(3)}`}
      />
      <div className="mt-3 flex justify-end">
        <ShareStateButton getUrl={getShareUrl} />
      </div>
    </article>
  );
}
