// Sanity client stub - site runs on hardcoded content
// Replace with real @sanity/client when ready to connect CMS
export const client = {
  async fetch(_query: string) {
    return null;
  },
};

export function urlFor(_source: any) {
  return { url: () => "" };
}
