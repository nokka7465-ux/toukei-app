"use client";

import { useState } from "react";
import { Field, NumberInput, Result, chiSqCdf } from "./toolPrimitives";

export function McnemarTest() {
  // 2x2 表: 介入前後 / 2 つの分類器の予測など
  // [後 +/前 +], [後 -/前 +]
  // [後 +/前 -], [後 -/前 -]
  const [tt, setTt] = useState(20);  // 両方陽性
  const [tf, setTf] = useState(15);  // 介入前 + → 後 -
  const [ft, setFt] = useState(35);  // 介入前 - → 後 +
  const [ff, setFf] = useState(30);  // 両方陰性

  // McNemar 検定: 不一致セルだけ使う(b と c)
  const b = tf;
  const c = ft;
  const total = tt + tf + ft + ff;

  // 通常版: χ² = (|b - c| - 0.5)² / (b + c)(連続性補正)
  // 厳密 McNemar(small samples): 二項検定だが省略
  const useExact = b + c < 25;
  const chi = b + c > 0 ? Math.pow(Math.abs(b - c) - 0.5, 2) / (b + c) : 0;
  const p = b + c > 0 ? 1 - chiSqCdf(chi, 1) : 1;

  // 正味変化(オッズ・効果サイズ)
  const ratio = b > 0 ? c / b : Infinity;

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">マクネマー検定</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          対応のある 2×2 二値データに対する検定(介入前後・2 分類器の予測比較)。
        </p>
      </header>

      <div className="overflow-x-auto mb-4">
        <table className="text-xs ui-sans tabular-nums w-full">
          <thead>
            <tr>
              <th></th>
              <th className="px-2 py-1 text-[var(--muted)] font-normal">後 +</th>
              <th className="px-2 py-1 text-[var(--muted)] font-normal">後 −</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-[var(--muted)] font-normal text-right pr-2">前 +</th>
              <td className="p-1">
                <Field label="">
                  <NumberInput value={tt} onChange={(v) => setTt(Math.max(0, Math.round(v)))} step={1} min={0} />
                </Field>
              </td>
              <td className="p-1">
                <Field label="b">
                  <NumberInput value={tf} onChange={(v) => setTf(Math.max(0, Math.round(v)))} step={1} min={0} />
                </Field>
              </td>
            </tr>
            <tr>
              <th className="text-[var(--muted)] font-normal text-right pr-2">前 −</th>
              <td className="p-1">
                <Field label="c">
                  <NumberInput value={ft} onChange={(v) => setFt(Math.max(0, Math.round(v)))} step={1} min={0} />
                </Field>
              </td>
              <td className="p-1">
                <Field label="">
                  <NumberInput value={ff} onChange={(v) => setFf(Math.max(0, Math.round(v)))} step={1} min={0} />
                </Field>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-[10px] text-[var(--muted)] mt-1">
          総数: {total} / 不一致セル b+c = {b + c} {useExact && "(b+c<25 のため厳密検定推奨)"}
        </p>
      </div>

      <Result
        label="p 値(連続性補正 χ²)"
        value={b + c === 0 ? "不一致なし" : p < 1e-4 ? p.toExponential(2) : p.toFixed(4)}
        hint={`χ² = (|b−c|−0.5)²/(b+c) = ${chi.toFixed(3)} / df = 1 / 比 c/b = ${Number.isFinite(ratio) ? ratio.toFixed(2) : "∞"} / ${b + c > 0 && p < 0.05 ? "α=5% で有意な変化あり" : "α=5% で有意な変化なし"}`}
      />
    </article>
  );
}
