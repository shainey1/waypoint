import { City, Activity } from "./types";

export const cities: City[] = [
  {
    name: "Denver",
    slug: "denver",
    state: "Colorado",
    tagline: "Mile High adventures start here",
    description:
      "At 5,280 feet with 300 days of sunshine, Denver is a launchpad for world-class outdoor recreation. From Front Range trails to championship golf courses, the city offers something for every active person.",
    heroImage:
      "https://images.unsplash.com/photo-1619856699906-09e1f4ef69b7?w=1600&q=80",
    activities: ["hiking", "golf", "rock-climbing", "cycling", "running"],
  },
];

export const activities: Activity[] = [
  {
    name: "Hiking",
    slug: "hiking",
    icon: "⛰️",
    description: "Trails, 14ers, and alpine lakes",
    color: "from-emerald-500 to-green-700",
  },
  {
    name: "Golf",
    slug: "golf",
    icon: "⛳",
    description: "Public courses and year-round play",
    color: "from-teal-500 to-cyan-700",
  },
  {
    name: "Rock Climbing",
    slug: "rock-climbing",
    icon: "🧗",
    description: "Indoor gyms and legendary outdoor crags",
    color: "from-orange-500 to-red-700",
  },
  {
    name: "Cycling",
    slug: "cycling",
    icon: "🚴",
    description: "Road rides, mountain trails, and bike paths",
    color: "from-blue-500 to-indigo-700",
  },
  {
    name: "Running",
    slug: "running",
    icon: "🏃",
    description: "Trail runs, track clubs, and altitude training",
    color: "from-violet-500 to-purple-700",
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getActivity(slug: string): Activity | undefined {
  return activities.find((a) => a.slug === slug);
}
