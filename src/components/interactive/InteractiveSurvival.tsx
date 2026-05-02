"use client";

import { useMemo, useState } from "react";
import { Slider } from "./Slider";
import { InteractiveCard } from "./InteractiveCard";

const W = 460;
const H = 240;
const PAD_L = 36;
const PAD_R = 14;
const PAD_T = 14;
const PAD_B = 28;
const PLOT_W = W - PAD_L - PAD_R;
const PLOT_H = H - PAD_T - PAD_B;

/**
 * Build a Kaplan-Meier curve for an exponential survival time with rate λ
 * and uniform censoring on [0, cMax]. Returns step series.
 */
function makeRng(seed: number): () => number {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Event = { time: number; event: boolean };

function simulate(
  n: number,
  lambda: number,
  cMax: number,
  seed: number,
): Event[] {
  const rng = makeRng(seed);
  const events: Event[] = [];
  for (let i = 0; i < n; i++) {
    const t = -Math.log(rng()) / lambda;
    const c = rng() * cMax;
    if (t <= c) events.push({ time: t, event: true });
    else events.push({ time: c, event: false });
  }
  return events.sort((a, b) => a.time - b.time);
}

function kaplanMeier(events: Event[]): { time: number; surv: number }[] {
  let n = events.length;
  let s = 1;
  const out: { time: number; surv: number }[] = [{ time: 0, surv: 1 }];
  let i = 0;
  while (i < events.length) {
    const t = events[i].time;
    let d = 0;
    let cens = 0;
    while (i < events.length && events[i].time === t) {
      if (events[i].event) d++;
      else cens++;
      i++;
    }
    if (d > 0) {
      s *= 1 - d / n;
      out.push({ time: t, surv: s });
    }
    n -= d + cens;
  }
  return out;
}

export function InteractiveSurvival() {
  const [lambda, setLambda] = useState(0.5);
  const [cMax, setCMax] = useState(6);
  const [n, setN] = useState(80);
  const [seed, setSeed] = useState(0);

  const { events, km } = useMemo(() => {
    const events = simulate(n, lambda, cMax, seed);
    const km = kaplanMeier(events);
    return { events, km };
  }, [lambda, cMax, n, seed]);

  const tMax = Math.max(8 / lambda, cMax) + 0.5;
  const xToPx = (t: number) => PAD_L + (t / tMax) * PLOT_W;
  const yToPx = (s: number) => PAD_T + (1 - s) * PLOT_H;

  // KM step path
  const kmPath: string[] = [];
  for (let i = 0; i < km.length - 1; i++) {
    const a = km[i];
    const b = km[i + 1];
    if (i === 0) kmPath.push(`M ${xToPx(a.time).toFixed(2)} ${yToPx(a.surv).toFixed(2)}`);
    kmPath.push(
      `L ${xToPx(b.time).toFixed(2)} ${yToPx(a.surv).toFixed(2)}`,
      `L ${xToPx(b.time).toFixed(2)} ${yToPx(b.surv).toFixed(2)}`,
    );
  }
  if (km.length > 0) {
    const last = km[km.length - 1];
    kmPath.push(`L ${xToPx(tMax).toFixed(2)} ${yToPx(last.surv).toFixed(2)}`);
  }

  // True survival curve S(t) = e^{-λt}
  const truePath = (() => {
    const N = 100;
    const pts: string[] = [];
    for (let i = 0; i <= N; i++) {
      const t = (i / N) * tMax;
      const s = Math.exp(-lambda * t);
      pts.push(`${i === 0 ? "M" : "L"} ${xToPx(t).toFixed(2)} ${yToPx(s).toFixed(2)}`);
    }
    return pts.join(" ");
  })();

  const observedDeaths = events.filter((e) => e.event).length;

  return (
    <InteractiveCard
      title="Kaplan-Meier 生存曲線"
      description="指数分布で発生する『真の生存時間』に一様な打ち切りを加えた合成データから、Kaplan-Meier 推定量(階段曲線)が真の生存関数(滑らかな曲線)に近づく様子を体感できます。"
    >
      <div className="flex justify-center mb-3">
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: 480 }}>
          {/* axes */}
          <line
            x1={PAD_L}
            x2={PAD_L + PLOT_W}
            y1={PAD_T + PLOT_H}
            y2={PAD_T + PLOT_H}
            stroke="var(--page-border-strong)"
          />
          <line
            x1={PAD_L}
            x2={PAD_L}
            y1={PAD_T}
            y2={PAD_T + PLOT_H}
            stroke="var(--page-border-strong)"
          />
          {/* y-axis ticks */}
          {[0, 0.25, 0.5, 0.75, 1].map((s, i) => (
            <g key={i}>
              <line
                x1={PAD_L - 3}
                x2={PAD_L}
                y1={yToPx(s)}
                y2={yToPx(s)}
                stroke="var(--muted)"
              />
              <text
                x={PAD_L - 6}
                y={yToPx(s) + 3}
                fontSize="9"
                textAnchor="end"
                fill="var(--muted)"
                fontFamily="var(--font-noto-sans-jp)"
              >
                {s.toFixed(2)}
              </text>
            </g>
          ))}
          {/* True S(t) */}
          <path
            d={truePath}
            fill="none"
            stroke="var(--link)"
            strokeWidth={1.5}
            strokeDasharray="3 3"
          />
          {/* KM */}
          <path
            d={kmPath.join(" ")}
            fill="none"
            stroke="var(--accent)"
            strokeWidth={1.8}
          />
          {/* Censoring tick marks */}
          {events
            .filter((e) => !e.event)
            .map((e, i) => {
              // Find current S at e.time
              let s = 1;
              for (const p of km) {
                if (p.time <= e.time) s = p.surv;
                else break;
              }
              return (
                <line
                  key={i}
                  x1={xToPx(e.time)}
                  x2={xToPx(e.time)}
                  y1={yToPx(s) - 4}
                  y2={yToPx(s) + 4}
                  stroke="var(--muted-strong)"
                  strokeWidth={1}
                />
              );
            })}
          {[0, tMax / 2, tMax].map((t, i) => (
            <text
              key={i}
              x={xToPx(t)}
              y={PAD_T + PLOT_H + 16}
              fontSize="9"
              textAnchor="middle"
              fill="var(--muted)"
              fontFamily="var(--font-noto-sans-jp)"
            >
              {t.toFixed(1)}
            </text>
          ))}
        </svg>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Slider
          label="ハザード率 λ"
          value={lambda}
          min={0.1}
          max={2}
          step={0.05}
          onChange={setLambda}
          format={(v) => v.toFixed(2)}
        />
        <Slider
          label="打ち切り上限"
          value={cMax}
          min={1}
          max={15}
          step={0.5}
          onChange={setCMax}
          format={(v) => v.toFixed(1)}
        />
        <Slider
          label="サンプル n"
          value={n}
          min={20}
          max={300}
          step={10}
          onChange={(v) => setN(Math.round(v))}
          format={(v) => Math.round(v).toString()}
        />
      </div>
      <div className="flex items-center justify-between gap-3 ui-sans text-xs flex-wrap mt-3">
        <p className="text-[var(--muted)]">
          観測イベント {observedDeaths} 件 / 打ち切り {n - observedDeaths} 件 / 真の中央生存時間 = ln(2)/λ ≈{" "}
          {(Math.log(2) / lambda).toFixed(2)}
        </p>
        <button
          type="button"
          onClick={() => setSeed((s) => (s + 1) | 0)}
          className="px-2.5 py-1 rounded border border-[var(--page-border-strong)] hover:bg-[var(--background)]"
        >
          別のサンプル
        </button>
      </div>
    </InteractiveCard>
  );
}
