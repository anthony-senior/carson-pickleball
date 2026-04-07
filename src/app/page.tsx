import { client } from "@/lib/sanity";
import { homepageQuery } from "@/lib/queries";
import { getUpcomingEvents } from "@/lib/google-calendar";
import { HomePage } from "@/components/HomePage";

// Hardcoded fallback data
const defaults = {
  heroHeadline1: "CARSON",
  heroHeadline2: "PICKLEBALL",
  heroTagline: "IT'S A VIBE!",
  heroDescription:
    "Your source for all things pickleball in Carson CA and immediate area. Open play, leagues, tournaments, and community for all ages and skill levels.",
  heroCtaPrimaryText: "Register for League",
  heroCtaPrimaryUrl:
    "https://rallyleagues.com/pickleball-facilities/carson-pickleball",
  heroCtaSecondaryText: "Join the Community",
  heroCtaSecondaryUrl: "/forum",
  missionLabel: "Our Mission",
  missionHeading: "WE'RE BUILDING COMMUNITY\nTHROUGH PICKLEBALL",
  missionDescription:
    "The philosophy in Carson is to foster an environment of inclusivity for all players of all levels. We strive to welcome new players and help them navigate the waters of our growing community.",
  ctaHeading: "READY TO PADDLE UP?",
  ctaDescription:
    "Join the Carson Pickleball community. Connect with players, share your game, and be part of something special.",
  ctaTagline: "PADDLES UP...0-0-2!",
};

const defaultStats = [
  { value: "17", label: "Courts Available" },
  { value: "4", label: "Park Locations" },
  { value: "All Ages", label: "Welcome to Play" },
  { value: "Free", label: "City Park Play" },
];

const defaultEvents = [
  {
    title: "Open Play at Hemingway",
    start: "Every Saturday",
    end: "",
    type: "Open Play",
    color: "bg-brand-green",
  },
  {
    title: "Spring League Registration",
    start: "Opens Soon",
    end: "",
    type: "League",
    color: "bg-brand-blue",
  },
  {
    title: "Carson Classic 2026",
    start: "Coming Soon",
    end: "",
    type: "Tournament",
    color: "bg-accent-gold",
  },
];

export const revalidate = 60;

export default async function Home() {
  const [sanityData, calendarEvents] = await Promise.all([
    client.fetch(homepageQuery).catch(() => null),
    getUpcomingEvents(4).catch(() => []),
  ]);

  const data = {
    ...defaults,
    ...Object.fromEntries(
      Object.entries(sanityData || {}).filter(([_, v]) => v != null)
    ),
  };
  const stats = sanityData?.stats?.length ? sanityData.stats : defaultStats;
  const events = calendarEvents.length ? calendarEvents : defaultEvents;

  return <HomePage data={data} stats={stats} events={events} />;
}
