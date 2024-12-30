const BRAVE_SEARCH_KEY = 'BSAM01ZbzJPJzRNqYB-NAMHCCquFGrT';

export const createBraveSearchUrl = (query: string): string => {
  return `https://search.brave.com/search?q=${encodeURIComponent(query)}&source=web&key=${BRAVE_SEARCH_KEY}`;
};