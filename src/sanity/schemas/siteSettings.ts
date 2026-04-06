import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteName", title: "Site Name", type: "string", initialValue: "Carson Pickleball" }),
    defineField({ name: "siteDescription", title: "Site Description", type: "text", rows: 2 }),
    defineField({ name: "footerTagline", title: "Footer Tagline", type: "string" }),
    defineField({ name: "leagueRegistrationUrl", title: "League Registration URL", type: "url" }),
    defineField({ name: "facebookUrl", title: "Facebook URL", type: "url" }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
    defineField({ name: "contactEmail", title: "Contact Email", type: "string" }),
    defineField({ name: "googleCalendarId", title: "Google Calendar ID", type: "string", description: "Used for the calendar page embed and upcoming events" }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
