/// <reference types="svelte" />

export interface SubpageIndex {
  groups: {
    id: string;
    title: string;
    pages: {
      title: string;
      endpoint: string;
    }[];
  }[];
}
