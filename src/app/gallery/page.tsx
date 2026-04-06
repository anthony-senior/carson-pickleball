import { client } from "@/lib/sanity";
import { galleryQuery } from "@/lib/queries";
import { GalleryPage } from "@/components/GalleryPage";

const defaultPhotos = [
  { imageUrl: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895cead669d4fda3c0271_AW8A5308.jpg", caption: "Court action at Hemingway Park", aspect: "aspect-[4/3]" },
  { imageUrl: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895cf9d3e43d48121326b_SEN00893.jpg", caption: "Community tournament day", aspect: "aspect-square" },
  { imageUrl: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d2309b6ec3d3149bf3_SEN07199.jpg", caption: "Stevenson Park courts", aspect: "aspect-[3/4]" },
  { imageUrl: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d0c6e2d433c930b939_SEN01283.jpg", caption: "Open play session", aspect: "aspect-[4/3]" },
  { imageUrl: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895cdeaaaee27c935119f_20250517_133833-67a3.jpg", caption: "Junior players in action", aspect: "aspect-[3/4]" },
  { imageUrl: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895dde353e22b23407b55_AW8A4124.jpg", caption: "League championship match", aspect: "aspect-square" },
  { imageUrl: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d5e4b5ed758209fde9_20240401_123205.jpg", caption: "Community social event", aspect: "aspect-[4/3]" },
  { imageUrl: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895dc08ea536ccfbff6c6_AW8A4529.jpg", caption: "Dominguez Park aerial view", aspect: "aspect-[16/9]" },
  { imageUrl: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d62980875c9562c5cc_20250210_121838.jpg", caption: "Senior players group", aspect: "aspect-square" },
  { imageUrl: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d765490afc9cd1ac9f_20250210_122807.jpg", caption: "Tournament bracket day", aspect: "aspect-[4/3]" },
  { imageUrl: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d5d0c37b393096cf69_20250109_201510.jpg", caption: "Evening play under lights", aspect: "aspect-[3/4]" },
  { imageUrl: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895cde85d7cb359fece02_AM.jpg", caption: "Mixed doubles match", aspect: "aspect-square" },
  { imageUrl: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d5ed5629727913804f_20240701_190221.jpg", caption: "Summer open play", aspect: "aspect-[4/3]" },
  { imageUrl: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d9e3aaa6245c468935_20250830_113307.jpg", caption: "Community gathering", aspect: "aspect-[3/4]" },
  { imageUrl: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d9e78c6d01558ce427_20250628_140528.jpg", caption: "Saturday league play", aspect: "aspect-square" },
  { imageUrl: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895d9ed97c3516309ced9_20250926_181048.jpg", caption: "Fall tournament", aspect: "aspect-[4/3]" },
  { imageUrl: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895da63f2e1ff5deb4f4c_20251118_195434.jpg", caption: "Night session under lights", aspect: "aspect-[3/4]" },
  { imageUrl: "https://cdn.prod.website-files.com/6940950f26454356a111ceda/699895cceae491e22d1bc922_SEN03769.jpg", caption: "Players warming up", aspect: "aspect-square" },
];

export default async function Gallery() {
  const sanityPhotos = await client.fetch(galleryQuery).catch(() => null);
  const photos = sanityPhotos?.length ? sanityPhotos : defaultPhotos;
  return <GalleryPage photos={photos} />;
}
