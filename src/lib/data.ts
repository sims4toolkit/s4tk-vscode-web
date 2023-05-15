import type { SubpageIndex } from "src/global";

const BASE_URL = "http://127.0.0.1:5500";

export async function fetchPageIndex(basePage: string): Promise<SubpageIndex | undefined> {
  try {
    const response = await fetch(`${BASE_URL}/${basePage}/_index.json`);
    const json = await response.json();
    return json.pages;
  } catch (e) {
    console.error(`Could not fetch index for "${basePage}" [${e}]`);
  }
}

export async function fetchPageContent(basePage: string, endpoint: string): Promise<string | undefined> {
  try {
    const response = await fetch(`${BASE_URL}/${basePage}/${endpoint}.html`);
    return await response.text();
  } catch (e) {
    console.error(`Could not fetch content for "${basePage}/${endpoint}" [${e}]`);
  }
}
