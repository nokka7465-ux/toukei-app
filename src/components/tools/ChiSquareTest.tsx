"use client";

import { useState } from "react";
import {
  Result,
  chiSqCdf,
  DownloadButtons,
  toCsv,
} from "./toolPrimitives";

const INITIAL: number[][] = [
  [30, 20],
  [15, 35],
];

function calc(table: number[][]) {
  const rows = table.length;
  const cols = table[0]?.length ?? 0;
  const rowSums = table.map((r) => r.reduce((a, b) => a + b, 0));
  const colSums = Array.from({ length: cols }, (_, j) =>
    table.reduce((s, r) => s + r[j], 0),
  );
  const total = rowSums.reduce((a, b) => a + b, 0);
  let chi = 0;
  const expected: number[][] = [];
  for (let i = 0; i < rows; i++) {
    const row: number[] = [];
    for (let j = 0; j < cols; j++) {
      const e = total > 0 ? (rowSums[i] * colSums[j]) / total : 0;
      row.push(e);
      if (e > 0) chi += (table[i][j] - e) ** 2 / e;
    }
    expected.push(row);
  }
  const df = (rows - 1) * (cols - 1);
  const p = df > 0 ? 1 - chiSqCdf(chi, df) : 1;
  return { chi, df, p, expected, rowSums, colSums, total };
}

export function ChiSquareTest() {
  const [table, setTable] = useState<number[][]>(INITIAL);

  const update = (i: number, j: number, v: number) => {
    setTable((prev) =>
      prev.map((r, ri) => r.map((c, ci) => (ri === i && ci === j ? Math.max(0, Math.round(v)) : c))),
    );
  };

  const setSize = (rows: number, cols: number) => {
    setTable((prev) => {
      const next: number[][] = [];
      for (let i = 0; i < rows; i++) {
        const row: number[] = [];
        for (let j = 0; j < cols; j++) {
          row.push(prev[i]?.[j] ?? 10);
        }
        next.push(row);
      }
      return next;
    });
  };

  const { chi, df, p, expected, rowSums, colSums, total } = calc(table);
  const rows = table.length;
  const cols = table[0].length;

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">カイ二乗 独立性検定</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          クロス表を入力すると χ² 統計量・自由度・p 値を計算。期待度数も表示。
        </p>
      </header>
      <div className="flex gap-2 mb-3 ui-sans text-xs">
        {[
          [2, 2],
          [2, 3],
          [3, 3],
        ].map(([r, c]) => (
          <button
            key={`${r}x${c}`}
            type="button"
            onClick={() => setSize(r, c)}
            className={`px-3 py-1 rounded border transition ${
              rows === r && cols === c
                ? "bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] border-[var(--accent)] font-bold"
                : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
            }`}
          >
            {r}×{c}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="text-xs ui-sans tabular-nums">
          <tbody>
            {table.map((row, i) => (
              <tr key={i}>
                <th className="text-[var(--muted)] pr-2 font-normal">行{i + 1}</th>
                {row.map((v, j) => (
                  <td key={j} className="p-1">
                    <input
                      type="number"
                      value={v}
                      min={0}
                      step={1}
                      onChange={(e) => update(i, j, parseFloat(e.target.value) || 0)}
                      className="w-16 px-2 py-1 border border-[var(--page-border-strong)] rounded text-xs bg-[var(--page)] focus:outline-none focus:border-[var(--link)] tabular-nums"
                    />
                    <div className="text-[10px] text-[var(--muted)] mt-0.5 text-center">
                      E={expected[i][j].toFixed(1)}
                    </div>
                  </td>
                ))}
                <td className="pl-2 text-[var(--muted)]">合計 {rowSums[i]}</td>
              </tr>
            ))}
            <tr>
              <th className="text-[var(--muted)] pr-2 font-normal">列計</th>
              {colSums.map((c, j) => (
                <td key={j} className="text-center p-1 text-[var(--muted)]">
                  {c}
                </td>
              ))}
              <td className="pl-2 text-[var(--muted)]">N={total}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Result
        label="p 値"
        value={p < 1e-4 ? p.toExponential(2) : p.toFixed(4)}
        hint={`χ² = Σ(O−E)²/E = ${chi.toFixed(3)} / df = (r−1)(c−1) = ${df} / ${p < 0.05 ? "α=5% で独立性 H₀ を棄却(関連あり)" : "α=5% で独立性 H₀ を棄却できない"}`}
      />
      <div className="mt-3 flex justify-end">
        <DownloadButtons
          baseFilename="chi-square"
          csv={toCsv(
            table.flatMap((row, i) =>
              row.map((cell, j) => ({
                row: i + 1,
                col: j + 1,
                observed: cell,
                expected: expected[i][j],
                residual: cell - expected[i][j],
              })),
            ),
          )}
          json={{
            table,
            expected,
            rowSums,
            colSums,
            total,
            chiSquare: chi,
            df,
            pValue: p,
          }}
        />
      </div>
    </article>
  );
}
