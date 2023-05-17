<script lang="ts">
  import { onMount } from "svelte";
  import { replace } from "svelte-spa-router";
  import type { SubpageData, SubpageIndex } from "src/global";
  import { fetchPageContent, fetchPageIndex } from "src/lib/data";
  import Settings from "src/lib/settings";
  import SectionHeader from "src/components/elements/SectionHeader.svelte";
  import OsDisclaimer from "src/components/elements/OsDisclaimer.svelte";
  import LoadError from "src/components/elements/LoadError.svelte";
  import Sidenav from "./Sidenav.svelte";
  import HtmlRenderer from "./HtmlRenderer.svelte";

  export let basePageName: string;
  export let basePageEndpoint: string;
  export let activeSubpage: string | undefined;

  let showOsDisclaimer = !Settings.hasSeenOsDisclaimer;
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
    htmlContent = undefined;
    contentLoadError = false;
    const content = await fetchPageContent(basePageEndpoint, activeSubpage);
    if (content) {
      htmlContent = content;

      for (let i = 0; i < subpageIndex.groups.length; ++i) {
        const group = subpageIndex.groups[i];
        for (let j = 0; j < group.pages.length; ++j) {
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

<div class="flex-1 flex flex-col md:flex-row gap-10">
  {#if indexLoadError}
    <div class="flex-1 flex items-center">
      <LoadError />
    </div>
  {:else}
    <Sidenav {basePageName} {basePageEndpoint} {activeSubpage} {subpageIndex} />
    <div class="w-full">
      {#if showOsDisclaimer}
        <div class="mb-10">
          <OsDisclaimer onDismiss={() => (showOsDisclaimer = false)} />
        </div>
      {/if}
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
        <HtmlRenderer {basePageEndpoint} {htmlContent} />
      {:else}
        <p>Loading...</p>
      {/if}
    </div>
  {/if}
</div>
