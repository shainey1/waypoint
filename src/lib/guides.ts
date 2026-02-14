import { CityActivityGuide } from "./types";
import { denverHiking } from "./guides/denver-hiking";

const guides: Record<string, CityActivityGuide> = {
  "denver/hiking": denverHiking,
};

export function getGuide(
  citySlug: string,
  activitySlug: string
): CityActivityGuide | undefined {
  return guides[`${citySlug}/${activitySlug}`];
}

export function getAllGuideSlugs(): { city: string; activity: string }[] {
  return Object.keys(guides).map((key) => {
    const [city, activity] = key.split("/");
    return { city, activity };
  });
}
