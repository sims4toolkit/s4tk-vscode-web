import type { SubpageIndex } from "src/global";

// FIXME: Use actual URL or put in config/env variables
const BASE_URL = "http://127.0.0.1:5500";

const INDEX_CACHE = new Map<string, SubpageIndex>();
const CONTENT_CACHE = new Map<string, string>();

/**
 * Fetches the index for the given page.
 * 
 * @param basePage Base page to fetch index for
 */
export async function fetchPageIndex(basePage: string): Promise<SubpageIndex | undefined> {
  try {
    if (INDEX_CACHE.has(basePage)) return INDEX_CACHE.get(basePage);
    const url = `${BASE_URL}/${basePage}/_index.json`;
    const response = await fetch(url);
    const json = await response.json() as SubpageIndex;
    if (!Array.isArray(json?.groups))
      throw Error("Did not find expected JSON structure");
    INDEX_CACHE.set(basePage, json);
    return json;
  } catch (e) {
    console.error(`Could not fetch index for "${basePage}" [${e}]`);
  }
}

/**
 * Fetches the HTML content for the given page/endpoint.
 * 
 * @param basePage Base page that the content is found on
 * @param endpoint Endpoint for specific content to fetch
 */
export async function fetchPageContent(basePage: string, endpoint: string): Promise<string | undefined> {
  try {
    const url = `${BASE_URL}/${basePage}/${endpoint}.html`;
    if (CONTENT_CACHE.has(url)) return CONTENT_CACHE.get(url);
    const response = await fetch(url);
    if (!response.ok) return;
    const text = await response.text();
    CONTENT_CACHE.set(url, text);
    return text;
  } catch (e) {
    console.error(`Could not fetch content for "${basePage}/${endpoint}" [${e}]`);
  }
}

/**
 * Returns the URL at which an image can be found.
 * 
 * @param basePage Base page that the image is found on
 * @param image Name of the image, including its extension
 */
export function getImageSource(basePage: string, image: string): string {
  return `${BASE_URL}/${basePage}/images/${image}`;
}
