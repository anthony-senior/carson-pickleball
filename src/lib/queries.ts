export const homepageQuery = `*[_type == "homepage"][0]`;

export const aboutPageQuery = `*[_type == "aboutPage"][0]{
  ...,
  "wideImageUrl": wideImage.asset->url,
  "sideImageUrl": sideImage.asset->url
}`;

export const courtsQuery = `*[_type == "court"] | order(order asc)`;

export const galleryQuery = `*[_type == "galleryPhoto"] | order(order asc){
  ...,
  "imageUrl": image.asset->url
}`;

export const forumCategoriesQuery = `*[_type == "forumCategory"] | order(order asc)`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]`;
