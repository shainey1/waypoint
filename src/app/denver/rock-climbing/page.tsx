import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { SpotCard } from "@/components/SpotCard";
import { CommunityCard } from "@/components/CommunityCard";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { WeeklySignalBanner } from "@/components/WeeklySignalBanner";
import { getCity, getActivity } from "@/lib/data";
import { getGuide } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Rock Climbing in Denver — Waypoint",
  description:
    "The complete guide to rock climbing in Denver, Colorado. Gyms, outdoor crags, gear shops, communities, and insider tips for recent movers.",
};

export default function DenverRockClimbingPage() {
  const city = getCity("denver");
  const activity = getActivity("rock-climbing");
  const guide = getGuide("denver", "rock-climbing");

  if (!city || !activity || !guide) notFound();

  const gyms = guide.spots.filter((s) => s.type === "gym");
  const beginnerSpots = guide.spots.filter(
    (s) => s.difficulty === "beginner" && s.type === "trail"
  );
  const intermediateSpots = guide.spots.filter(
    (s) => s.difficulty === "intermediate"
  );
  const advancedSpots = guide.spots.filter((s) => s.difficulty === "advanced");
  const shops = guide.spots.filter((s) => s.type === "shop");

  const sections = [
    { id: "gyms", label: "Gyms" },
    { id: "outdoor", label: "Outdoor Crags" },
    { id: "whats-different", label: "What's Different" },
    { id: "gear-shops", label: "Gear & Shops" },
    { id: "communities", label: "Communities" },
    { id: "resources", label: "Resources" },
    { id: "insider-tips", label: "Insider Tips" },
    { id: "seasonal", label: "Seasonal" },
    { id: "getting-started", label: "Getting Started" },
  ];

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="hero-glow top-0 left-1/2 -translate-x-1/2 -translate-y-1/3" />

          <div className="max-w-6xl mx-auto px-6 pt-24 pb-12 sm:pt-32 sm:pb-16 relative">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <a href="/" className="hover:text-gray-300 transition-colors">
                Home
              </a>
              <span>/</span>
              <a
                href="/denver"
                className="hover:text-gray-300 transition-colors"
              >
                Denver
              </a>
              <span>/</span>
              <span className="text-gray-300">Rock Climbing</span>
            </div>

            {/* Title */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{activity.icon}</span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-gray-50 tracking-tight">
                Rock Climbing in Denver
              </h1>
            </div>

            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              {guide.tagline}
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-3">
              {guide.quickStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 bg-surface-900/60 border border-gray-800/50 rounded-lg px-4 py-2.5"
                >
                  <span className="text-sm text-gray-400">{stat.label}</span>
                  <span className="font-mono text-sm font-medium text-accent-400">
                    {stat.value}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-2 bg-surface-900/60 border border-gray-800/50 rounded-lg px-4 py-2.5">
                <span className="text-sm text-gray-400">Best season</span>
                <span className="font-mono text-sm font-medium text-accent-400">
                  {guide.bestSeason}
                </span>
              </div>
            </div>

            {/* Weekly Signal */}
            {guide.weeklySignal && (
              <div className="mt-8">
                <WeeklySignalBanner signal={guide.weeklySignal} />
              </div>
            )}
          </div>
        </section>

        {/* Section nav */}
        <nav className="sticky top-16 z-40 bg-surface-950/90 backdrop-blur-lg border-y border-gray-800/40">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="shrink-0 text-xs font-medium text-gray-500 hover:text-gray-200 hover:bg-gray-800/50 px-3 py-1.5 rounded-lg transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* ========== GYMS ========== */}
          <SectionHeading
            id="gyms"
            number="01"
            title="Indoor Gyms"
            subtitle="Start here. Denver's gym scene is one of the best in the country."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {gyms.map((gym) => (
              <SpotCard key={gym.name} spot={gym} />
            ))}
          </div>

          {/* ========== OUTDOOR ========== */}
          <div className="section-divider">
            <SectionHeading
              id="outdoor"
              number="02"
              title="Outdoor Climbing"
              subtitle="Crags organized by difficulty, from your first outdoor day to destination routes."
            />

            {/* Beginner Outdoor */}
            {beginnerSpots.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <DifficultyBadge level="beginner" />
                  <span className="text-sm text-gray-500">
                    Good for your first outdoor sessions
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {beginnerSpots.map((spot) => (
                    <SpotCard key={spot.name} spot={spot} />
                  ))}
                </div>
              </div>
            )}

            {/* Intermediate */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <DifficultyBadge level="intermediate" />
                <span className="text-sm text-gray-500">
                  Regular destinations for Denver climbers
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {intermediateSpots.map((spot) => (
                  <SpotCard key={spot.name} spot={spot} />
                ))}
              </div>
            </div>

            {/* Advanced */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <DifficultyBadge level="advanced" />
                <span className="text-sm text-gray-500">
                  Iconic destinations that draw climbers worldwide
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {advancedSpots.map((spot) => (
                  <SpotCard key={spot.name} spot={spot} />
                ))}
              </div>
            </div>
          </div>

          {/* ========== WHAT'S DIFFERENT ========== */}
          <div className="section-divider">
            <SectionHeading
              id="whats-different"
              number="03"
              title="What's Different Here"
              subtitle="Climbing in Colorado has unique advantages and challenges."
            />

            <div className="space-y-6">
              {guide.whatsDifferent.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-800/60 bg-surface-900/30 p-6"
                >
                  <h3 className="font-display font-semibold text-lg text-gray-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ========== GEAR & SHOPS ========== */}
          <div className="section-divider">
            <SectionHeading
              id="gear-shops"
              number="04"
              title="Local Gear & Shops"
              subtitle="Where Denver climbers buy gear and get advice."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {shops.map((shop) => (
                <SpotCard key={shop.name} spot={shop} />
              ))}
            </div>
          </div>

          {/* ========== COMMUNITIES ========== */}
          <div className="section-divider">
            <SectionHeading
              id="communities"
              number="05"
              title="Communities & Partners"
              subtitle="Find climbing partners and join the Denver climbing community."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guide.communities.map((c) => (
                <CommunityCard key={c.name} community={c} />
              ))}
            </div>
          </div>

          {/* ========== RESOURCES ========== */}
          <div className="section-divider">
            <SectionHeading
              id="resources"
              number="06"
              title="Apps & Resources"
              subtitle="The tools Denver climbers actually use."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guide.resources.map((r) => (
                <div
                  key={r.name}
                  className="rounded-xl border border-gray-800/60 bg-surface-900/30 p-5 card-hover"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="font-display font-semibold text-gray-100">
                      {r.name}
                    </h4>
                    {r.url && (
                      <a
                        href={r.url}
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
                  <div className="flex gap-2 mb-3">
                    {r.platform && (
                      <span className="text-xs text-gray-500">
                        {r.platform}
                      </span>
                    )}
                    {r.cost && (
                      <span className="text-xs font-mono text-accent-400">
                        {r.cost}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ========== INSIDER TIPS ========== */}
          <div className="section-divider">
            <SectionHeading
              id="insider-tips"
              number="07"
              title="Insider Tips"
              subtitle="Local knowledge that only comes from climbing here."
            />

            <div className="space-y-3">
              {guide.insiderTips.map((tip, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-xl border border-gray-800/60 bg-surface-900/30 p-5"
                >
                  <span className="font-mono text-sm text-accent-600 font-medium shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-gray-300 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ========== SEASONAL ========== */}
          <div className="section-divider">
            <SectionHeading
              id="seasonal"
              number="08"
              title="Seasonal Guide"
              subtitle="What to climb and when throughout the year."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guide.seasonal.map((s) => (
                <div
                  key={s.season}
                  className="rounded-xl border border-gray-800/60 bg-surface-900/30 p-6"
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="font-display font-semibold text-lg text-gray-100">
                      {s.season}
                    </h3>
                    <span className="text-xs font-mono text-gray-500">
                      {s.months}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {s.description}
                  </p>
                  <ul className="space-y-2">
                    {s.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1 text-xs">•</span>
                        <span className="text-sm text-gray-400">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ========== GETTING STARTED ========== */}
          <div className="section-divider">
            <SectionHeading
              id="getting-started"
              number="09"
              title="New to Climbing?"
              subtitle="Your first-week checklist for getting started in Denver."
            />

            <div className="rounded-xl border border-gray-800/60 bg-surface-900/30 p-6">
              <div className="space-y-3">
                {guide.beginnerChecklist.map((item, i) => (
                  <label
                    key={i}
                    className="flex items-start gap-3 cursor-pointer group"
                  >
                    <div className="mt-0.5 w-5 h-5 shrink-0 rounded border-2 border-gray-700 group-hover:border-accent-600 transition-colors flex items-center justify-center">
                      {/* Checkbox is visual only */}
                    </div>
                    <span className="text-sm text-gray-300 leading-relaxed">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
