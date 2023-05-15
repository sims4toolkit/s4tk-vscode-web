<script lang="ts">
  import { onMount } from "svelte";
  import type { SubpageIndex } from "src/global";
  import { fetchPageIndex } from "src/lib/data";
  import ContentWithSidenav from "src/components/layout/ContentWithSidenav.svelte";

  export let params: { version?: string } = {};

  const basePageName = "Updates";
  const basePageEndpoint = "updates";
  let subpageIndex: SubpageIndex | undefined;

  onMount(() => {
    fetchPageIndex(basePageEndpoint).then((index) => {
      subpageIndex = index;
    });
  });
</script>

<svelte:head>
  <title>S4TK &times; VS Code | Updates</title>
</svelte:head>

<section class="flex-1 w-full flex flex-col items-center">
  <div
    class="pt-20 pb-10 w-full xl:max-w-screen-xl px-4 flex flex-col justify-center"
  >
    <ContentWithSidenav
      {basePageName}
      {basePageEndpoint}
      bind:activeSubpage={params.version}
      {subpageIndex}
    />
  </div>
</section>
