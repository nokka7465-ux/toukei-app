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
  xbar: number;
  sigma: number;
  p: number;
  n: number;
  level: number;
};

const DEFAULT_STATE: State = {
  type: "mean",
  xbar: 50,
  sigma: 10,
  p: 0.4,
  n: 100,
  level: 0.95,
};

export function ConfidenceIntervalCalc() {
  const { state: s, setState: setS, getShareUrl } =
    useToolUrlState<State>(DEFAULT_STATE);

  const upd = <K extends keyof State>(key: K, value: State[K]) =>
    setS((prev) => ({ ...prev, [key]: value }));

  const z = normInv(1 - (1 - s.level) / 2);

  let lo = 0,
    hi = 0,
    se = 0,
    formula = "";
  if (s.type === "mean") {
    se = s.sigma / Math.sqrt(s.n);
    lo = s.xbar - z * se;
    hi = s.xbar + z * se;
    formula = "x̄ ± z · σ/√n";
  } else {
    se = Math.sqrt((s.p * (1 - s.p)) / s.n);
    lo = s.p - z * se;
    hi = s.p + z * se;
    formula = "p̂ ± z · √(p̂(1-p̂)/n)";
  }

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">信頼区間計算機</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          母平均または母比率の信頼区間を計算します(母分散既知 / 大標本近似)。
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
            {t === "mean" ? "母平均" : "母比率"}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {s.type === "mean" ? (
          <>
            <Field label="標本平均 x̄">
              <NumberInput value={s.xbar} onChange={(v) => upd("xbar", v)} step={0.1} />
            </Field>
            <Field label="標準偏差 σ">
              <NumberInput
                value={s.sigma}
                onChange={(v) => upd("sigma", v)}
                step={0.1}
                min={0.01}
              />
            </Field>
          </>
        ) : (
          <Field label="標本比率 p̂" unit="0〜1">
            <NumberInput
              value={s.p}
              onChange={(v) => upd("p", v)}
              step={0.01}
              min={0}
              max={1}
            />
          </Field>
        )}
        <Field label="標本サイズ n">
          <NumberInput
            value={s.n}
            onChange={(v) => upd("n", Math.max(2, Math.round(v)))}
            step={1}
            min={2}
          />
        </Field>
        <Field label="信頼水準" unit="例: 0.95">
          <NumberInput
            value={s.level}
            onChange={(v) => upd("level", v)}
            step={0.01}
            min={0.5}
            max={0.9999}
          />
        </Field>
      </div>
      <Result
        label={`${(s.level * 100).toFixed(0)}% 信頼区間`}
        value={`[${lo.toFixed(4)}, ${hi.toFixed(4)}]`}
        hint={`${formula} / z=${z.toFixed(3)} / SE=${se.toFixed(4)}`}
      />
      <div className="mt-3 flex justify-end">
        <ShareStateButton getUrl={getShareUrl} />
      </div>
    </article>
  );
}
