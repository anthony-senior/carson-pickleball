import { defineField, defineType } from "sanity";

export default defineType({
  name: "court",
  title: "Court",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Park Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "courtCount", title: "Number of Courts", type: "number", validation: (Rule) => Rule.required().min(1) }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "mapUrl", title: "Google Maps Link", type: "url" }),
    defineField({ name: "weekdayHours", title: "Weekday Hours", type: "string" }),
    defineField({ name: "weekendHours", title: "Weekend Hours", type: "string" }),
    defineField({
      name: "features",
      title: "Court Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "accentColor",
      title: "Accent Color",
      type: "string",
      options: {
        list: [
          { title: "Green", value: "green" },
          { title: "Blue", value: "blue" },
          { title: "Gold", value: "gold" },
          { title: "Purple", value: "purple" },
        ],
      },
      initialValue: "green",
    }),
    defineField({ name: "order", title: "Display Order", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "courtCount" },
    prepare: ({ title, subtitle }) => ({ title, subtitle: `${subtitle} court${subtitle > 1 ? "s" : ""}` }),
  },
});
