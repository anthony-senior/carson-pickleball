import { defineField, defineType } from "sanity";

export default defineType({
  name: "forumCategory",
  title: "Forum Category",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Category Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "string" }),
    defineField({ name: "threadCount", title: "Thread Count", type: "number", initialValue: 0 }),
    defineField({
      name: "color",
      title: "Accent Color",
      type: "string",
      options: {
        list: [
          { title: "Green", value: "text-brand-green" },
          { title: "Blue", value: "text-brand-blue" },
          { title: "Gold", value: "text-accent-gold" },
          { title: "Purple", value: "text-[#a855f7]" },
          { title: "Orange", value: "text-[#f97316]" },
          { title: "Cyan", value: "text-[#06b6d4]" },
        ],
      },
      initialValue: "text-brand-green",
    }),
    defineField({ name: "order", title: "Display Order", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
