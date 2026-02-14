import { CityActivityGuide } from "./types";
import { denverHiking } from "./guides/denver-hiking";
import { denverGolf } from "./guides/denver-golf";
import { denverRockClimbing } from "./guides/denver-rock-climbing";
import { denverCycling } from "./guides/denver-cycling";
import { denverRunning } from "./guides/denver-running";

const guides: Record<string, CityActivityGuide> = {
  "denver/hiking": denverHiking,
  "denver/golf": denverGolf,
  "denver/rock-climbing": denverRockClimbing,
  "denver/cycling": denverCycling,
  "denver/running": denverRunning,
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
