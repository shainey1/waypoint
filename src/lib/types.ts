export type DifficultyLevel = "beginner" | "intermediate" | "advanced";

export type SpotType =
  | "trail"
  | "course"
  | "gym"
  | "shop"
  | "park"
  | "venue";

export type CommunityType = "club" | "meetup" | "online" | "league" | "class";

export type ResourceType = "app" | "website" | "tool" | "blog";

export interface City {
  name: string;
  slug: string;
  state: string;
  tagline: string;
  description: string;
  heroImage: string;
  activities: string[]; // activity slugs
}

export interface Activity {
  name: string;
  slug: string;
  icon: string;
  description: string;
  color: string; // tailwind gradient classes
}

export interface LocalSpot {
  name: string;
  type: SpotType;
  description: string;
  difficulty?: DifficultyLevel;
  distance?: string;
  elevationGain?: string;
  driveTime?: string;
  externalUrl?: string;
  insiderTip?: string;
  address?: string;
}

export interface Community {
  name: string;
  type: CommunityType;
  description: string;
  platform?: string;
  url?: string;
  cost?: string;
}

export interface Resource {
  name: string;
  type: ResourceType;
  description: string;
  url?: string;
  platform?: string;
  cost?: string;
}

export interface SeasonalInfo {
  season: string;
  months: string;
  description: string;
  highlights: string[];
}

export interface WeeklySignal {
  date: string; // e.g. "Feb 11, 2026"
  content: string;
  category?: string; // e.g. "conditions", "crowding", "event", "tip"
}

export interface CityActivityGuide {
  citySlug: string;
  activitySlug: string;
  tagline: string;
  heroImage: string;
  bestSeason: string;
  quickStats: { label: string; value: string }[];
  weeklySignal?: WeeklySignal;
  whatsDifferent: { title: string; content: string }[];
  spots: LocalSpot[];
  communities: Community[];
  resources: Resource[];
  insiderTips: string[];
  beginnerChecklist: string[];
  seasonal: SeasonalInfo[];
}
