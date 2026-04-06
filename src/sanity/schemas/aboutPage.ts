import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "heroHeading1", title: "Hero Heading (Line 1)", type: "string", initialValue: "NO PLACE LIKE" }),
    defineField({ name: "heroHeading2", title: "Hero Heading (Line 2, green)", type: "string", initialValue: "CARSON PICKLEBALL" }),
    defineField({ name: "heroSubheading", title: "Hero Subheading", type: "string" }),
    defineField({ name: "wideImage", title: "Wide Community Photo (top)", type: "image", options: { hotspot: true } }),
    defineField({ name: "sideImage", title: "Side Photo (next to story)", type: "image", options: { hotspot: true } }),
    defineField({
      name: "storyParagraphs",
      title: "The Story (paragraphs)",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({ name: "philosophyText", title: "The Philosophy", type: "text", rows: 6 }),
    defineField({ name: "commitmentText", title: "Our Commitment", type: "text", rows: 6 }),
  ],
  preview: { prepare: () => ({ title: "About Page" }) },
});
