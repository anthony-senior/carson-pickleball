import { client } from "@/lib/sanity";
import { siteSettingsQuery } from "@/lib/queries";
import { CalendarPage } from "@/components/CalendarPage";

export const revalidate = 60;

const DEFAULT_CALENDAR_ID = "en.usa#holiday@group.v.calendar.google.com";

export default async function Calendar() {
  const settings = await client.fetch(siteSettingsQuery).catch(() => null);
  const calendarId = settings?.googleCalendarId || DEFAULT_CALENDAR_ID;
  return <CalendarPage calendarId={calendarId} />;
}
