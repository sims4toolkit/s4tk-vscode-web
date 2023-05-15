<script lang="ts">
  import { onMount } from "svelte";
  import { replace } from "svelte-spa-router";
  import type { SubpageData, SubpageIndex } from "src/global";
  import { fetchPageContent, fetchPageIndex } from "src/lib/data";
  import SectionHeader from "src/components/elements/SectionHeader.svelte";
  import Sidenav from "./Sidenav.svelte";

  export let basePageName: string;
  export let basePageEndpoint: string;
  export let activeSubpage: string | undefined;

  let subpageIndex: SubpageIndex | undefined;
  let htmlContent: string | undefined;
  let indexLoadError: boolean = false;
  let contentLoadError: boolean = false;
  let subpageData: SubpageData | undefined;

  onMount(async () => {
    const index = await fetchPageIndex(basePageEndpoint);
    if (index) {
      subpageIndex = index;
      if (!activeSubpage) {
        replace(`/${basePageEndpoint}/${index.groups[0].pages[0].endpoint}`);
      }
    } else {
      indexLoadError = true;
    }
  });

  $: {
    if (activeSubpage && subpageIndex) fetchHtmlContent();
  }

  async function fetchHtmlContent() {
    contentLoadError = false;
    const content = await fetchPageContent(basePageEndpoint, activeSubpage);
    if (content) {
      htmlContent = content;

      for (let i = 0; i < subpageIndex.groups.length; ++i) {
        const group = subpageIndex.groups[i];
        for (let j = 0; j < subpageIndex.groups.length; ++j) {
          const pageData = group.pages[j];
          if (pageData.endpoint === activeSubpage) {
            subpageData = pageData;
            return;
          }
        }
      }
    } else {
      subpageData = undefined;
      htmlContent = undefined;
      contentLoadError = true;
    }
  }
</script>

<div class="flex flex-col md:flex-row gap-10">
  {#if indexLoadError}
    <p>Error</p>
  {:else}
    <Sidenav {basePageName} {basePageEndpoint} {activeSubpage} {subpageIndex} />
    <div>
      {#if contentLoadError}
        <SectionHeader title="Error 404" />
        <p class="mt-4">
          Page at '{basePageEndpoint}/{activeSubpage}' could not be found.
        </p>
      {:else if Boolean(htmlContent)}
        {#if Boolean(subpageData)}
          <div class="mb-10">
            <p class="mb-4 text-subtle text-sm">
              Updated: {subpageData.updated}
            </p>
            <SectionHeader title={subpageData.title} />
          </div>
        {/if}
        <div class="subpage-content">
          {@html htmlContent}
        </div>
      {:else}
        <p>Loading...</p>
      {/if}
    </div>
  {/if}
</div>
