// Sanity client stub -- returns null for all queries when packages aren't installed
// This lets the site work with hardcoded fallbacks
export const client = {
  async fetch(_query: string) {
    return null;
  },
};

export function urlFor(_source: any) {
  return { url: () => "" };
}
