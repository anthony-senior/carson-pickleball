import { client } from "@/lib/sanity";
import { courtsQuery } from "@/lib/queries";
import { CourtsPage } from "@/components/CourtsPage";

export const revalidate = 60;

const defaultCourts = [
  { name: "Hemingway Park", courtCount: 8, address: "700 E. Gardena Bl. Carson CA 90746", mapUrl: "https://maps.google.com/?q=700+E+Gardena+Blvd+Carson+CA+90746", weekdayHours: "Mon - Fri: 8 AM - 8:30 PM", weekendHours: "Sat - Sun: 8 AM - 4:30 PM", features: ["8 dedicated pickleball courts", "Free public access", "Lighted courts", "Parking available"], accentColor: "green" },
  { name: "Stevenson Park", courtCount: 4, address: "17400 Lysander Dr. Carson CA 90746", mapUrl: "https://maps.google.com/?q=17400+Lysander+Dr+Carson+CA+90746", weekdayHours: "Mon - Fri: 8 AM - 8:30 PM", weekendHours: "Sat - Sun: 8 AM - 4:30 PM", features: ["4 dedicated pickleball courts", "Free public access", "Restroom facilities", "Parking available"], accentColor: "blue" },
  { name: "Dominguez Park", courtCount: 4, address: "21330 S. Santa Fe Ave, Carson CA 90810", mapUrl: "https://maps.google.com/?q=21330+S+Santa+Fe+Ave+Carson+CA+90810", weekdayHours: "Mon - Fri: 3 PM - 8:30 PM", weekendHours: "Sat - Sun: 8 AM - 4:30 PM", features: ["4 dedicated pickleball courts", "Free public access", "Afternoon/evening hours", "Parking available"], accentColor: "gold" },
  { name: "Dolphin Park", courtCount: 1, address: "21205 Water St. Carson CA 90745", mapUrl: "https://maps.google.com/?q=21205+Water+St+Carson+CA+90745", weekdayHours: "Mon - Fri: 8 AM - 8:30 PM", weekendHours: "Sat - Sun: 8 AM - 4:30 PM", features: ["1 pickleball court", "Free public access", "Open park setting", "Parking available"], accentColor: "purple" },
];

export default async function Courts() {
  const sanityCourts = await client.fetch(courtsQuery).catch(() => null);
  const courts = sanityCourts?.length ? sanityCourts : defaultCourts;
  return <CourtsPage courts={courts} />;
}
