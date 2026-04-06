export interface CalendarEvent {
  title: string;
  start: string;
  end: string;
  type: string;
  color: string;
}

const CALENDAR_ID = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID || "";
const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY || "";

export async function getUpcomingEvents(maxResults = 4): Promise<CalendarEvent[]> {
  if (!CALENDAR_ID || !API_KEY) return [];

  try {
    const now = new Date().toISOString();
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&timeMin=${now}&maxResults=${maxResults}&singleEvents=true&orderBy=startTime`;

    const res = await fetch(url, { next: { revalidate: 300 } }); // cache 5 min
    if (!res.ok) return [];

    const data = await res.json();
    return (data.items || []).map((item: any) => {
      const title = item.summary || "Untitled Event";
      const type = guessEventType(title);
      return {
        title,
        start: item.start?.dateTime || item.start?.date || "",
        end: item.end?.dateTime || item.end?.date || "",
        type: type.label,
        color: type.color,
      };
    });
  } catch {
    return [];
  }
}

function guessEventType(title: string) {
  const lower = title.toLowerCase();
  if (lower.includes("open play")) return { label: "Open Play", color: "bg-brand-green" };
  if (lower.includes("league")) return { label: "League", color: "bg-brand-blue" };
  if (lower.includes("tournament") || lower.includes("classic")) return { label: "Tournament", color: "bg-accent-gold" };
  if (lower.includes("clinic") || lower.includes("training")) return { label: "Clinic", color: "bg-[#f97316]" };
  if (lower.includes("social") || lower.includes("mixer")) return { label: "Social", color: "bg-[#a855f7]" };
  return { label: "Event", color: "bg-brand-green" };
}
