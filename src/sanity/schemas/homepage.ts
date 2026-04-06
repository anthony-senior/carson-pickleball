import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "heroHeadline1", title: "Hero Headline (Line 1)", type: "string", initialValue: "CARSON" }),
    defineField({ name: "heroHeadline2", title: "Hero Headline (Line 2, green)", type: "string", initialValue: "PICKLEBALL" }),
    defineField({ name: "heroTagline", title: "Hero Tagline", type: "string", initialValue: "IT'S A VIBE!" }),
    defineField({ name: "heroDescription", title: "Hero Description", type: "text", rows: 3 }),
    defineField({ name: "heroCtaPrimaryText", title: "Hero CTA Primary Text", type: "string", initialValue: "Register for League" }),
    defineField({ name: "heroCtaPrimaryUrl", title: "Hero CTA Primary URL", type: "url" }),
    defineField({ name: "heroCtaSecondaryText", title: "Hero CTA Secondary Text", type: "string", initialValue: "Join the Community" }),
    defineField({ name: "heroCtaSecondaryUrl", title: "Hero CTA Secondary URL", type: "string", initialValue: "/forum" }),
    defineField({
      name: "stats",
      title: "Stats Bar",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "value", title: "Value", type: "string" },
          { name: "label", title: "Label", type: "string" },
        ],
      }],
    }),
    defineField({ name: "missionLabel", title: "Mission Section Label", type: "string", initialValue: "Our Mission" }),
    defineField({ name: "missionHeading", title: "Mission Heading", type: "string" }),
    defineField({ name: "missionDescription", title: "Mission Description", type: "text", rows: 4 }),
    defineField({ name: "ctaHeading", title: "Bottom CTA Heading", type: "string" }),
    defineField({ name: "ctaDescription", title: "Bottom CTA Description", type: "text", rows: 3 }),
    defineField({ name: "ctaTagline", title: "Bottom CTA Tagline", type: "string", initialValue: "PADDLES UP...0-0-2!" }),
  ],
  preview: { select: { title: "heroHeadline1" }, prepare: () => ({ title: "Homepage" }) },
});
