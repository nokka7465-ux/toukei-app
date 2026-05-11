"use client";

import {
  Field,
  NumberInput,
  Result,
  ShareStateButton,
  normCdf,
  tCdf,
  chiSqCdf,
} from "./toolPrimitives";
import { useToolUrlState } from "@/lib/tool-state";

type DistKind = "z" | "t" | "chi2";

type State = {
  kind: DistKind;
  stat: number;
  df: number;
  side: "two" | "right" | "left";
};

const DEFAULT_STATE: State = {
  kind: "z",
  stat: 1.7,
  df: 10,
  side: "two",
};

export function PValueCalc() {
  const { state: s, setState: setS, getShareUrl } =
    useToolUrlState<State>(DEFAULT_STATE);

  const upd = <K extends keyof State>(key: K, value: State[K]) =>
    setS((prev) => ({ ...prev, [key]: value }));

  let p = NaN;
  let formula = "";
  if (s.kind === "z") {
    if (s.side === "two") p = 2 * (1 - normCdf(Math.abs(s.stat)));
    else if (s.side === "right") p = 1 - normCdf(s.stat);
    else p = normCdf(s.stat);
    formula = "標準正規分布";
  } else if (s.kind === "t") {
    if (s.side === "two") p = 2 * (1 - tCdf(Math.abs(s.stat), s.df));
    else if (s.side === "right") p = 1 - tCdf(s.stat, s.df);
    else p = tCdf(s.stat, s.df);
    formula = `t(df=${s.df})`;
  } else {
    // カイ二乗 = 右片側のみ
    p = 1 - chiSqCdf(s.stat, s.df);
    formula = `χ²(df=${s.df})`;
  }

  const isSignif = p < 0.05;

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">p 値計算機</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          検定統計量(z / t / χ²)から p 値を計算します。
        </p>
      </header>
      <div className="flex gap-2 ui-sans text-xs mb-4 flex-wrap">
        {(["z", "t", "chi2"] as DistKind[]).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => {
              setS((prev) => ({
                ...prev,
                kind: k,
                side: k === "chi2" ? "right" : prev.side,
              }));
            }}
            className={`px-3 py-1 rounded border transition ${
              s.kind === k
                ? "bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] border-[var(--accent)] font-bold"
                : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
            }`}
          >
            {k === "z" ? "z 検定" : k === "t" ? "t 検定" : "χ² 検定"}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field
          label={
            s.kind === "chi2"
              ? "観測 χ² 値"
              : s.kind === "t"
                ? "観測 t 値"
                : "観測 z 値"
          }
        >
          <NumberInput
            value={s.stat}
            onChange={(v) => upd("stat", v)}
            step={0.01}
          />
        </Field>
        {(s.kind === "t" || s.kind === "chi2") && (
          <Field label="自由度 df">
            <NumberInput
              value={s.df}
              onChange={(v) => upd("df", Math.max(1, Math.round(v)))}
              step={1}
              min={1}
            />
          </Field>
        )}
        {s.kind !== "chi2" && (
          <div className="ui-sans">
            <span className="text-xs text-[var(--muted-strong)] mb-1 block">
              検定の方向
            </span>
            <div className="flex gap-2 mt-1">
              {(["two", "right", "left"] as const).map((side) => (
                <button
                  key={side}
                  type="button"
                  onClick={() => upd("side", side)}
                  className={`px-3 py-1 rounded text-xs border transition ${
                    s.side === side
                      ? "bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] border-[var(--accent)] font-bold"
                      : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
                  }`}
                >
                  {side === "two" ? "両側" : side === "right" ? "右側" : "左側"}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <Result
        label="p 値"
        value={p.toFixed(6)}
        hint={`${formula} / ${
          isSignif ? "α=0.05 で有意" : "α=0.05 では有意でない"
        }`}
      />
      <div className="mt-3 flex justify-end">
        <ShareStateButton getUrl={getShareUrl} />
      </div>
    </article>
  );
}
