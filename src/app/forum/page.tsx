import { client } from "@/lib/sanity";
import { forumCategoriesQuery } from "@/lib/queries";
import { ForumPage } from "@/components/ForumPage";

export const revalidate = 60;

export default async function Forum() {
  const categories = (await client.fetch(forumCategoriesQuery).catch(() => null)) || [];
  return <ForumPage categories={categories} />;
}
