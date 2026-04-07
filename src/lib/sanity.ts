const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const API_VERSION = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

const SANITY_API = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}`;

export const client = {
  async fetch(query: string) {
    if (!PROJECT_ID) return null;
    try {
      const url = `${SANITY_API}?query=${encodeURIComponent(query)}`;
      const res = await fetch(url, { next: { revalidate: 60 } });
      if (!res.ok) return null;
      const data = await res.json();
      return data.result ?? null;
    } catch {
      return null;
    }
  },
};

export function urlFor(source: any) {
  if (!source?.asset?._ref) return { url: () => "" };
  const ref = source.asset._ref;
  const [, id, dimensions, format] = ref.split("-");
  return {
    url: () => `https://cdn.sanity.io/images/${PROJECT_ID}/${DATASET}/${id}-${dimensions}.${format}`,
  };
}
