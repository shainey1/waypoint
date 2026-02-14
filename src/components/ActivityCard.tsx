import Link from "next/link";
import { Activity } from "@/lib/types";

interface ActivityCardProps {
  activity: Activity;
  citySlug: string;
  stat?: string;
}

export function ActivityCard({ activity, citySlug, stat }: ActivityCardProps) {
  return (
    <Link
      href={`/${citySlug}/${activity.slug}`}
      className="group block relative overflow-hidden rounded-2xl border border-gray-800/60 bg-surface-900/50 card-hover"
    >
      {/* Gradient accent bar */}
      <div
        className={`h-1 w-full bg-gradient-to-r ${activity.color} opacity-60 group-hover:opacity-100 transition-opacity`}
      />

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <span className="text-3xl">{activity.icon}</span>
          <svg
            className="w-5 h-5 text-gray-600 group-hover:text-accent-400 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
        </div>

        <h3 className="font-display font-bold text-xl text-gray-100 mb-1">
          {activity.name}
        </h3>
        <p className="text-sm text-gray-400 mb-3">{activity.description}</p>

        {stat && (
          <span className="inline-block text-xs font-mono text-accent-400 bg-accent-900/30 px-2.5 py-1 rounded-full border border-accent-800/30">
            {stat}
          </span>
        )}
      </div>
    </Link>
  );
}
