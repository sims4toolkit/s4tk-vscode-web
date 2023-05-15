/// <reference types="svelte" />

export interface SubpageIndex {
  groups: {
    title: string;
    pages: SubpageData[];
  }[];
}

export interface SubpageData {
  endpoint: string;
  title: string;
  updated: string;
}
