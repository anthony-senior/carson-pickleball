import { client } from "@/lib/sanity";
import { aboutPageQuery } from "@/lib/queries";
import { AboutPage } from "@/components/AboutPage";

export const revalidate = 60;

const defaults = {
  heroHeading1: "NO PLACE LIKE",
  heroHeading2: "CARSON PICKLEBALL",
  heroSubheading:
    "A community built on passion, inclusivity, and the love of the game.",
  wideImageUrl:
    "https://cdn.prod.website-files.com/6940950f26454356a111ceda/698e2ecb8e6091a7960f7dd4_DJI_20240210105513_0016_D-Edit.png",
  sideImageUrl:
    "https://cdn.prod.website-files.com/6940950f26454356a111ceda/698e2eca898d38983c6677bd_P1010003-2.jpg",
  storyParagraphs: null as string[] | null,
  philosophyText: `The philosophy in Carson is to foster an environment of inclusivity for all players of all levels. New players often find it intimidating to venture to a new venue and "paddle up", therefore, we strive to welcome new players and help them navigate the waters of our growing community.`,
  commitmentText: `The Carson Pickleball community continues to grow at a rapid rate with new courts being added by city and private entities. We are committed to continuing our mission of providing a safe, vibrant, competitive community for players of all levels and all ages. Pickleball is the fastest growing sport in America and we intend to be the trendsetters in offering as many pickleball options as possible. Carson is definitely the place to be for Pickleball... IT'S A VIBE!`,
};

export default async function About() {
  const sanityData = await client.fetch(aboutPageQuery).catch(() => null);

  const data = {
    ...defaults,
    ...Object.fromEntries(
      Object.entries(sanityData || {}).filter(([, v]) => v != null)
    ),
  };

  return <AboutPage data={data} />;
}
