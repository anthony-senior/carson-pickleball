import { defineField, defineType } from "sanity";

export default defineType({
  name: "galleryPhoto",
  title: "Gallery Photo",
  type: "document",
  fields: [
    defineField({ name: "image", title: "Photo", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }),
    defineField({ name: "caption", title: "Caption", type: "string" }),
    defineField({
      name: "aspect",
      title: "Aspect Ratio",
      type: "string",
      options: {
        list: [
          { title: "Landscape (4:3)", value: "aspect-[4/3]" },
          { title: "Square", value: "aspect-square" },
          { title: "Portrait (3:4)", value: "aspect-[3/4]" },
          { title: "Wide (16:9)", value: "aspect-[16/9]" },
        ],
      },
      initialValue: "aspect-[4/3]",
    }),
    defineField({ name: "order", title: "Display Order", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "caption", media: "image" },
  },
});
