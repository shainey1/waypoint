import { WeeklySignal } from "@/lib/types";

const categoryConfig: Record<string, { label: string; icon: string }> = {
  conditions: { label: "Conditions", icon: "🏔️" },
  crowding: { label: "Crowding", icon: "👥" },
  event: { label: "Event", icon: "📅" },
  tip: { label: "Tip", icon: "💡" },
  alert: { label: "Alert", icon: "⚡" },
};

export function WeeklySignalBanner({ signal }: { signal: WeeklySignal }) {
  const cat = signal.category
    ? categoryConfig[signal.category]
    : categoryConfig.tip;

  return (
    <div className="rounded-xl border border-accent-800/30 bg-accent-950/20 p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-9 h-9 rounded-lg bg-accent-900/40 border border-accent-800/30 flex items-center justify-center text-sm">
          {cat?.icon || "📡"}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-medium text-accent-400 uppercase tracking-wider">
              This week
            </span>
            {cat && (
              <span className="text-xs text-accent-600">{cat.label}</span>
            )}
            <span className="text-xs text-gray-600 ml-auto shrink-0">
              {signal.date}
            </span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            {signal.content}
          </p>
        </div>
      </div>
    </div>
  );
}
