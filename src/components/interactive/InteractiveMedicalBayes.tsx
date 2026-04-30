"use client";

import { useState } from "react";
import { Slider } from "./Slider";
import { InteractiveCard } from "./InteractiveCard";

const W = 460,
  H = 220,
  PAD = 30;

export function InteractiveMedicalBayes() {
  const [prevalence, setPrevalence] = useState(0.01);
  const [sensitivity, setSensitivity] = useState(0.95);
  const [specificity, setSpecificity] = useState(0.95);

  const fpRate = 1 - specificity;
  const tp = prevalence * sensitivity;
  const fp = (1 - prevalence) * fpRate;
  const fn = prevalence * (1 - sensitivity);
  const tn = (1 - prevalence) * specificity;

  const ppv = tp / (tp + fp);
  const npv = tn / (tn + fn);

  const total = tp + fp + fn + tn;
  const barTotal = W - PAD * 2;
  const tpW = (tp / total) * barTotal;
  const fpW = (fp / total) * barTotal;
  const fnW = (fn / total) * barTotal;
  const tnW = (tn / total) * barTotal;

  return (
    <InteractiveCard
      title="ベイズの定理 ─ 医療検査の真実"
      description="「精度 95% の検査で陽性なら、本当に病気である確率は?」 直感に反する答えをスライダーで体感。"
    >
      <div className="flex justify-center mb-4">
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: 480 }}>
          {/* Population bar */}
          <text x={PAD} y={36} fontSize="10" fill="var(--muted)" fontFamily="var(--font-noto-sans-jp)">
            人口 1000 人 ─ 罹患 {(prevalence * 1000).toFixed(0)} 人 / 健常 {((1 - prevalence) * 1000).toFixed(0)} 人
          </text>
          <g transform={`translate(${PAD}, 50)`}>
            <rect x={0} y={0} width={tpW} height={28} fill="#10b981" />
            <rect x={tpW} y={0} width={fnW} height={28} fill="#f59e0b" />
            <rect x={tpW + fnW} y={0} width={fpW} height={28} fill="#ef4444" />
            <rect x={tpW + fnW + fpW} y={0} width={tnW} height={28} fill="#3b82f6" opacity={0.45} />
          </g>

          {/* Legend */}
          <g transform={`translate(${PAD}, 92)`}>
            <rect x="0" y="0" width="10" height="10" fill="#10b981" />
            <text x="14" y="9" fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">
              真陽性 {(tp * 1000).toFixed(1)}
            </text>
            <rect x="80" y="0" width="10" height="10" fill="#f59e0b" />
            <text x="94" y="9" fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">
              偽陰性 {(fn * 1000).toFixed(1)}
            </text>
            <rect x="160" y="0" width="10" height="10" fill="#ef4444" />
            <text x="174" y="9" fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">
              偽陽性 {(fp * 1000).toFixed(1)}
            </text>
            <rect x="240" y="0" width="10" height="10" fill="#3b82f6" opacity={0.45} />
            <text x="254" y="9" fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">
              真陰性 {(tn * 1000).toFixed(1)}
            </text>
          </g>

          {/* PPV / NPV */}
          <g transform={`translate(${PAD}, 130)`}>
            <rect x="0" y="0" width="200" height="60" fill="var(--highlight)" stroke="var(--accent)" strokeWidth="1.5" rx="4" />
            <text x="100" y="20" fontSize="10" fill="var(--muted)" fontFamily="var(--font-noto-sans-jp)" textAnchor="middle">
              陽性的中率(PPV)
            </text>
            <text x="100" y="44" fontSize="20" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)" textAnchor="middle" fontWeight="bold">
              {(ppv * 100).toFixed(1)}%
            </text>

            <rect x="220" y="0" width="180" height="60" fill="var(--page)" stroke="var(--page-border-strong)" strokeWidth="1" rx="4" />
            <text x="310" y="20" fontSize="10" fill="var(--muted)" fontFamily="var(--font-noto-sans-jp)" textAnchor="middle">
              陰性的中率(NPV)
            </text>
            <text x="310" y="44" fontSize="18" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)" textAnchor="middle" fontWeight="bold">
              {(npv * 100).toFixed(1)}%
            </text>
          </g>
        </svg>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Slider
          label="有病率(事前確率)"
          value={prevalence}
          min={0.001}
          max={0.5}
          step={0.001}
          onChange={setPrevalence}
          format={(v) => `${(v * 100).toFixed(1)}%`}
        />
        <Slider
          label="感度(真陽性率)"
          value={sensitivity}
          min={0.5}
          max={0.999}
          step={0.001}
          onChange={setSensitivity}
          format={(v) => `${(v * 100).toFixed(1)}%`}
        />
        <Slider
          label="特異度(真陰性率)"
          value={specificity}
          min={0.5}
          max={0.999}
          step={0.001}
          onChange={setSpecificity}
          format={(v) => `${(v * 100).toFixed(1)}%`}
        />
      </div>
      <p className="mt-3 text-xs text-[var(--muted)] ui-sans">
        陽性的中率 = TP / (TP + FP)。**有病率が低いほど偽陽性が増え、PPV が劇的に下がる** ── これが集団検診の根本問題。
      </p>
    </InteractiveCard>
  );
}
