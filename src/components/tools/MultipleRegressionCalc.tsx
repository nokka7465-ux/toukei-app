"use client";

import { useMemo, useState } from "react";
import {
  fitMultipleRegression,
  parseCsv,
  SAMPLE_REGRESSION_CSV,
  SAMPLE_REGRESSION_NAMES,
} from "@/lib/tools/multiple-regression";
import { DownloadButtons, toCsv } from "./toolPrimitives";

const DEFAULT_NAMES: [string, string, string] = ["x1", "x2", "x3"];

export function MultipleRegressionCalc() {
  const [names, setNames] = useState<[string, string, string]>(DEFAULT_NAMES);
  const [numVars, setNumVars] = useState<1 | 2 | 3>(2);
  const [csv, setCsv] = useState<string>(SAMPLE_REGRESSION_CSV);

  const result = useMemo(() => {
    const rows = parseCsv(csv);
    const activeNames = names.slice(0, numVars);
    return fitMultipleRegression({ names: activeNames, rows });
  }, [csv, names, numVars]);

  const updateName = (i: 0 | 1 | 2, v: string) => {
    setNames((prev) => {
      const next: [string, string, string] = [...prev] as typeof prev;
      next[i] = v;
      return next;
    });
  };

  const loadSample = () => {
    setNames([...SAMPLE_REGRESSION_NAMES]);
    setNumVars(3);
    setCsv(SAMPLE_REGRESSION_CSV);
  };

  const hasMulticollinearity = result.coefficients.some(
    (c) => Number.isFinite(c.vif) && c.vif > 10,
  );

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">重回帰分析計算機</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          最大 3 つの説明変数で回帰係数・標準誤差・p 値・R² を計算します。CSV 形式で各行 = サンプル(末尾列が目的変数 y)。
        </p>
      </header>

      {/* 説明変数の数 */}
      <div className="ui-sans text-xs mb-3">
        <span className="text-[var(--muted-strong)] block mb-1">
          説明変数の数
        </span>
        <div className="flex gap-2">
          {([1, 2, 3] as const).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setNumVars(k)}
              className={`px-3 py-1 rounded border transition ${
                numVars === k
                  ? "bg-[var(--accent)] text-[var(--accent-fg)] border-[var(--accent)] font-bold"
                  : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
              }`}
            >
              {k} 変数
            </button>
          ))}
          <button
            type="button"
            onClick={loadSample}
            className="ml-auto px-3 py-1 rounded border border-[var(--page-border-strong)] hover:bg-[var(--background)]"
          >
            例題をロード
          </button>
        </div>
      </div>

      {/* 変数名 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
        {Array.from({ length: numVars }).map((_, i) => (
          <label key={i} className="block ui-sans">
            <span className="text-xs text-[var(--muted-strong)] mb-1 block">
              説明変数 {i + 1} の名前
            </span>
            <input
              type="text"
              value={names[i]}
              onChange={(e) => updateName(i as 0 | 1 | 2, e.target.value)}
              className="w-full px-3 py-2 border border-[var(--page-border-strong)] rounded text-sm bg-[var(--page)] focus:outline-none focus:border-[var(--link)]"
            />
          </label>
        ))}
      </div>

      {/* CSV 入力 */}
      <label className="block ui-sans">
        <span className="text-xs text-[var(--muted-strong)] mb-1 block">
          データ(CSV / TSV / 空白区切り、最終列が目的変数 y)
        </span>
        <textarea
          value={csv}
          onChange={(e) => setCsv(e.target.value)}
          rows={8}
          className="w-full px-3 py-2 border border-[var(--page-border-strong)] rounded text-sm bg-[var(--page)] focus:outline-none focus:border-[var(--link)] tabular-nums font-mono leading-relaxed"
        />
      </label>

      {result.error ? (
        <p className="mt-4 text-xs text-red-600 ui-sans">{result.error}</p>
      ) : (
        <>
          {/* R² 表示 */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-lg p-4 border-2 border-[var(--accent)] bg-[var(--highlight)]">
              <div className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] ui-sans mb-1 font-bold">
                R²(決定係数)
              </div>
              <div className="text-2xl md:text-3xl font-bold tabular-nums">
                {result.rSquared.toFixed(4)}
              </div>
            </div>
            <div className="rounded-lg p-4 border-2 border-[var(--page-border-strong)]">
              <div className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] ui-sans mb-1 font-bold">
                自由度調整 R²
              </div>
              <div className="text-2xl md:text-3xl font-bold tabular-nums">
                {result.adjustedRSquared.toFixed(4)}
              </div>
            </div>
          </div>

          {/* 係数テーブル */}
          <div className="mt-4 paper rounded p-3 overflow-x-auto">
            <table className="w-full text-xs ui-sans tabular-nums">
              <thead className="text-[var(--muted-strong)]">
                <tr>
                  <th className="text-left py-1 pr-3">変数</th>
                  <th className="text-right py-1 pr-3">係数 β</th>
                  <th className="text-right py-1 pr-3">標準誤差</th>
                  <th className="text-right py-1 pr-3">t 値</th>
                  <th className="text-right py-1 pr-3">p 値</th>
                  <th className="text-right py-1">VIF</th>
                </tr>
              </thead>
              <tbody>
                {result.coefficients.map((c) => (
                  <tr key={c.name} className="border-t border-[var(--page-border)]">
                    <td className="py-1 pr-3 font-bold">{c.name}</td>
                    <td className="text-right pr-3">{fmt(c.estimate, 4)}</td>
                    <td className="text-right pr-3">{fmt(c.stdError, 4)}</td>
                    <td className="text-right pr-3">{fmt(c.tValue, 3)}</td>
                    <td
                      className={`text-right pr-3 ${
                        Number.isFinite(c.pValue) && c.pValue < 0.05
                          ? "font-bold text-[var(--link)]"
                          : ""
                      }`}
                    >
                      {fmtP(c.pValue)}
                    </td>
                    <td
                      className={`text-right ${
                        Number.isFinite(c.vif) && c.vif > 10
                          ? "text-red-600 font-bold"
                          : ""
                      }`}
                    >
                      {Number.isNaN(c.vif) ? "—" : fmt(c.vif, 2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {hasMulticollinearity && (
            <p className="mt-3 text-xs text-red-600 ui-sans">
              ⚠ VIF &gt; 10 の説明変数があります。多重共線性の可能性が高いため、変数を見直してください。
            </p>
          )}

          <div className="mt-3 flex items-center justify-between gap-3 flex-wrap">
            <div className="text-xs text-[var(--muted)] ui-sans tabular-nums">
              n = {result.n} / 残差標準誤差 = {fmt(result.residualStdError, 4)} / F
              ={fmt(result.fStatistic, 3)} (p ≒ {fmtP(result.fPValue)})
            </div>
            <DownloadButtons
              baseFilename="regression"
              csv={toCsv(
                result.coefficients.map((c) => ({
                  variable: c.name,
                  estimate: c.estimate,
                  stdError: c.stdError,
                  tValue: c.tValue,
                  pValue: c.pValue,
                  vif: c.vif,
                })),
              )}
              json={{
                rSquared: result.rSquared,
                adjustedRSquared: result.adjustedRSquared,
                n: result.n,
                residualStdError: result.residualStdError,
                fStatistic: result.fStatistic,
                fPValue: result.fPValue,
                coefficients: result.coefficients,
              }}
            />
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
  return v.toFixed(4);
}
