<script lang="ts">
  import { onMount } from "svelte";
  import { replace } from "svelte-spa-router";
  import type { SubpageIndex } from "src/global";
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

  onMount(async () => {
    const index = await fetchPageIndex(basePageEndpoint);
    if (index?.length) {
      subpageIndex = index;
      if (!activeSubpage) {
        replace(`/${basePageEndpoint}/${index[0].endpoint}`);
      }
    } else {
      indexLoadError = true;
    }
  });

  $: {
    if (activeSubpage && subpageIndex?.length) fetchHtmlContent();
  }

  async function fetchHtmlContent() {
    contentLoadError = false;
    const content = await fetchPageContent(basePageEndpoint, activeSubpage);
    if (content) {
      htmlContent = content;
    } else {
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
        {@html htmlContent}
      {:else}
        <p>Loading...</p>
      {/if}
    </div>
  {/if}
</div>
