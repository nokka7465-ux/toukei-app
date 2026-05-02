"use client";

import { useState } from "react";
import { Field, NumberInput, Result, normInv } from "./toolPrimitives";

/**
 * 2x2 contingency table → Odds Ratio (OR), Relative Risk (RR), Risk Difference,
 * with 95% confidence intervals using log-normal approximation.
 *
 * Layout:
 *            | 結果 + | 結果 −
 *   曝露 +   |   a   |   b
 *   曝露 −   |   c   |   d
 */
export function OddsRatioCalc() {
  const [a, setA] = useState(40);
  const [b, setB] = useState(60);
  const [c, setC] = useState(20);
  const [d, setD] = useState(80);
  const [level, setLevel] = useState(0.95);

  // Haldane-Anscombe correction when any cell is 0 (avoid log(0))
  const hasZero = a === 0 || b === 0 || c === 0 || d === 0;
  const ac = hasZero ? a + 0.5 : a;
  const bc = hasZero ? b + 0.5 : b;
  const cc = hasZero ? c + 0.5 : c;
  const dc = hasZero ? d + 0.5 : d;

  const or = (ac * dc) / (bc * cc);
  const lnOr = Math.log(or);
  const seLnOr = Math.sqrt(1 / ac + 1 / bc + 1 / cc + 1 / dc);
  const z = normInv(1 - (1 - level) / 2);
  const orLo = Math.exp(lnOr - z * seLnOr);
  const orHi = Math.exp(lnOr + z * seLnOr);

  const r1 = ac / (ac + bc); // exposed risk
  const r0 = cc / (cc + dc); // unexposed risk
  const rr = r1 / r0;
  const lnRr = Math.log(rr);
  const seLnRr = Math.sqrt(
    bc / (ac * (ac + bc)) + dc / (cc * (cc + dc)),
  );
  const rrLo = Math.exp(lnRr - z * seLnRr);
  const rrHi = Math.exp(lnRr + z * seLnRr);

  const rd = r1 - r0;
  const seRd = Math.sqrt(
    (r1 * (1 - r1)) / (ac + bc) + (r0 * (1 - r0)) / (cc + dc),
  );
  const rdLo = rd - z * seRd;
  const rdHi = rd + z * seRd;

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">オッズ比 / 相対リスク計算機</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          2×2 分割表からオッズ比(OR)・相対リスク(RR)・リスク差(RD)を、対数正規近似で信頼区間付きに算出します。コホート研究・ケースコントロール研究の解釈に。
        </p>
      </header>
      <div className="overflow-x-auto mb-3">
        <table className="text-xs ui-sans border-collapse">
          <thead>
            <tr>
              <th className="p-1.5"></th>
              <th className="p-1.5 text-left">結果 +</th>
              <th className="p-1.5 text-left">結果 −</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="p-1.5 text-left">曝露 +</th>
              <td className="p-1.5">
                <NumberInput
                  value={a}
                  onChange={(v) => setA(Math.max(0, Math.round(v)))}
                  step={1}
                  min={0}
                />
              </td>
              <td className="p-1.5">
                <NumberInput
                  value={b}
                  onChange={(v) => setB(Math.max(0, Math.round(v)))}
                  step={1}
                  min={0}
                />
              </td>
            </tr>
            <tr>
              <th className="p-1.5 text-left">曝露 −</th>
              <td className="p-1.5">
                <NumberInput
                  value={c}
                  onChange={(v) => setC(Math.max(0, Math.round(v)))}
                  step={1}
                  min={0}
                />
              </td>
              <td className="p-1.5">
                <NumberInput
                  value={d}
                  onChange={(v) => setD(Math.max(0, Math.round(v)))}
                  step={1}
                  min={0}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-2">
        <Field label="信頼水準" unit="例: 0.95">
          <NumberInput
            value={level}
            onChange={setLevel}
            step={0.01}
            min={0.5}
            max={0.9999}
          />
        </Field>
      </div>
      <Result
        label={`オッズ比 OR (${(level * 100).toFixed(0)}% CI)`}
        value={`${or.toFixed(3)}  [${orLo.toFixed(3)}, ${orHi.toFixed(3)}]`}
        hint={`相対リスク RR = ${rr.toFixed(3)} [${rrLo.toFixed(3)}, ${rrHi.toFixed(3)}] / リスク差 RD = ${rd.toFixed(4)} [${rdLo.toFixed(4)}, ${rdHi.toFixed(4)}]${hasZero ? " / 0 セル補正(Haldane-Anscombe +0.5)" : ""}`}
      />
    </article>
  );
}
