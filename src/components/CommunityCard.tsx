import { Community } from "@/lib/types";

const typeLabels: Record<string, string> = {
  club: "Club",
  meetup: "Meetup",
  online: "Online",
  league: "League",
  class: "Class",
};

export function CommunityCard({ community }: { community: Community }) {
  return (
    <div className="rounded-xl border border-gray-800/60 bg-surface-900/30 p-5 card-hover">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h4 className="font-display font-semibold text-gray-100 text-base">
          {community.name}
        </h4>
        {community.url && (
          <a
            href={community.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-gray-500 hover:text-accent-400 transition-colors"
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

      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-medium text-gray-500 bg-gray-800/50 px-2 py-0.5 rounded">
          {typeLabels[community.type] || community.type}
        </span>
        {community.platform && (
          <span className="text-xs text-gray-500">
            on {community.platform}
          </span>
        )}
        {community.cost && (
          <span className="text-xs font-mono text-accent-400">
            {community.cost}
          </span>
        )}
      </div>

      <p className="text-sm text-gray-400 leading-relaxed">
        {community.description}
      </p>
    </div>
  );
}
