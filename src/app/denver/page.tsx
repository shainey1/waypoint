import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ActivityCard } from "@/components/ActivityCard";
import { activities, getCity } from "@/lib/data";

export const metadata: Metadata = {
  title: "Denver — Waypoint",
  description:
    "Outdoor activity guides for Denver, Colorado. Hiking, golf, climbing, cycling, and running — local spots, communities, and insider tips.",
};

const activityStats: Record<string, string> = {
  hiking: "50+ trails within 1hr",
  golf: "30+ public courses",
  "rock-climbing": "10+ gyms & outdoor crags",
  cycling: "200+ miles of bike paths",
  running: "15+ running clubs",
};

export default function DenverPage() {
  const city = getCity("denver");
  if (!city) notFound();

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="hero-glow top-0 left-1/2 -translate-x-1/2 -translate-y-1/3" />
          <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 sm:pt-32 sm:pb-20 relative">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-6"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              All cities
            </a>

            <h1 className="font-display font-bold text-4xl sm:text-5xl text-gray-50 tracking-tight mb-4">
              Denver
              <span className="text-gray-500 font-normal ml-3 text-3xl sm:text-4xl">
                Colorado
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl">{city.description}</p>
          </div>
        </section>

        {/* Activities */}
        <section>
          <div className="max-w-6xl mx-auto px-6 pb-24">
            <h2 className="font-display font-bold text-xl text-gray-300 mb-6">
              Activities
            </h2>
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
      </main>
      <Footer />
    </>
  );
}
