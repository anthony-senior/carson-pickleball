export const homepageQuery = `*[_type == "homepage"][0]`;

export const aboutPageQuery = `*[_type == "aboutPage"][0]{
  ...,
  "storyParagraphs": [storyParagraph1, storyParagraph2, storyParagraph3],
  "wideImageUrl": coalesce(wideImage.asset->url, wideImageUrl),
  "sideImageUrl": coalesce(sideImage.asset->url, sideImageUrl)
}`;

export const courtsQuery = `*[_type == "court"] | order(order asc)`;

export const galleryQuery = `*[_type == "galleryPhoto"] | order(order asc)`;

export const forumCategoriesQuery = `*[_type == "forumCategory"] | order(order asc)`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]`;
