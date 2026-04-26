"use client";

type SliderProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  format?: (value: number) => string;
};

export function Slider({
  label,
  value,
  min,
  max,
  step = 0.01,
  onChange,
  format,
}: SliderProps) {
  return (
    <div className="ui-sans">
      <div className="flex items-baseline justify-between mb-1">
        <label className="text-xs text-[var(--muted-strong)]">{label}</label>
        <span className="text-xs font-bold tabular-nums">
          {format ? format(value) : value.toFixed(2)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full accent-[var(--link)]"
      />
    </div>
  );
}
