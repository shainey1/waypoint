import { DifficultyLevel } from "@/lib/types";

const config: Record<
  DifficultyLevel,
  { label: string; bg: string; text: string; dot: string }
> = {
  beginner: {
    label: "Beginner",
    bg: "bg-emerald-900/40 border-emerald-700/30",
    text: "text-emerald-300",
    dot: "bg-emerald-400",
  },
  intermediate: {
    label: "Intermediate",
    bg: "bg-blue-900/40 border-blue-700/30",
    text: "text-blue-300",
    dot: "bg-blue-400",
  },
  advanced: {
    label: "Advanced",
    bg: "bg-red-900/40 border-red-700/30",
    text: "text-red-300",
    dot: "bg-red-400",
  },
};

export function DifficultyBadge({ level }: { level: DifficultyLevel }) {
  const c = config[level];
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${c.bg} ${c.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
}
