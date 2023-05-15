<script lang="ts">
  import ContentWithSidenav from "src/components/layout/ContentWithSidenav.svelte";

  export let basePageName: string;
  export let basePageEndpoint: string;
  export let activeSubpage: string | undefined;
</script>

<svelte:head>
  <title>S4TK &times; VS Code | {basePageName}</title>
</svelte:head>

<section class="flex-1 w-full flex flex-col items-center">
  <div
    class="pt-20 pb-10 w-full xl:max-w-screen-xl px-4 flex flex-col justify-center"
  >
    <ContentWithSidenav {basePageName} {basePageEndpoint} bind:activeSubpage />
  </div>
</section>
