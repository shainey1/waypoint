import { LocalSpot } from "@/lib/types";
import { DifficultyBadge } from "./DifficultyBadge";

export function SpotCard({ spot }: { spot: LocalSpot }) {
  return (
    <div className="group rounded-xl border border-gray-800/60 bg-surface-900/30 p-5 card-hover">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap mb-1">
            <h4 className="font-display font-semibold text-gray-100 text-base">
              {spot.name}
            </h4>
            {spot.difficulty && <DifficultyBadge level={spot.difficulty} />}
          </div>
          {spot.driveTime && (
            <span className="text-xs text-gray-500">{spot.driveTime}</span>
          )}
          {spot.address && (
            <span className="text-xs text-gray-500">{spot.address}</span>
          )}
        </div>
        {spot.externalUrl && (
          <a
            href={spot.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-gray-500 hover:text-accent-400 transition-colors"
            aria-label={`View ${spot.name} externally`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        )}
      </div>

      <p className="text-sm text-gray-400 leading-relaxed mb-3">
        {spot.description}
      </p>

      {/* Stats row */}
      {(spot.distance || spot.elevationGain) && (
        <div className="flex gap-4 mb-3">
          {spot.distance && (
            <span className="text-xs font-mono text-gray-500">
              {spot.distance}
            </span>
          )}
          {spot.elevationGain && (
            <span className="text-xs font-mono text-gray-500">
              ↑ {spot.elevationGain}
            </span>
          )}
        </div>
      )}

      {/* Insider tip */}
      {spot.insiderTip && (
        <div className="mt-3 pt-3 border-t border-gray-800/40">
          <div className="flex items-start gap-2">
            <span className="text-xs text-accent-500 mt-0.5 shrink-0">💡</span>
            <p className="text-xs text-gray-400 leading-relaxed italic">
              {spot.insiderTip}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
