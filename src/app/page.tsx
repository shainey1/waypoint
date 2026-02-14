import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ActivityCard } from "@/components/ActivityCard";
import { activities, cities } from "@/lib/data";

const activityStats: Record<string, string> = {
  hiking: "50+ trails within 1hr",
  golf: "30+ public courses",
  "rock-climbing": "10+ gyms & outdoor crags",
  cycling: "200+ miles of bike paths",
  running: "15+ running clubs",
};

export default function HomePage() {
  const denver = cities[0];

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden">
          {/* Background glow */}
          <div className="hero-glow top-0 left-1/2 -translate-x-1/2 -translate-y-1/3" />

          <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 sm:pt-32 sm:pb-28 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-400 bg-accent-900/20 border border-accent-800/30 rounded-full px-3 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
                Now live in Denver
              </div>

              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-gray-50 tracking-tight leading-[1.1] mb-6">
                Find your activity
                <br />
                <span className="text-gradient">in your new city</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl mb-10">
                Local guides for hikers, runners, climbers, cyclists, and
                golfers. Curated spots, communities, and insider knowledge —
                built for people who just moved.
              </p>

              <a
                href="#activities"
                className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-surface-950 font-semibold text-sm px-5 py-3 rounded-xl transition-colors"
              >
                Explore Denver
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Activities Grid */}
        <section id="activities" className="scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6 pb-24">
            <div className="flex items-baseline gap-3 mb-2">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-100">
                Denver
              </h2>
              <span className="text-sm text-gray-500 font-mono">
                {denver.state}
              </span>
            </div>
            <p className="text-gray-400 mb-10 max-w-xl">
              {denver.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activities.map((activity) => (
                <ActivityCard
                  key={activity.slug}
                  activity={activity}
                  citySlug="denver"
                  stat={activityStats[activity.slug]}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="border-t border-gray-800/40">
          <div className="max-w-6xl mx-auto px-6 py-20 text-center">
            <h2 className="font-display font-bold text-xl text-gray-300 mb-3">
              More cities coming soon
            </h2>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              Austin, Seattle, Portland, Boulder, and more. Waypoint is starting
              in Denver and expanding to cities where outdoor culture runs deep.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
