<script lang="ts">
  import ContentPage from "src/pages/ContentPage.svelte";

  export let params: { subpage?: string } = {};

  const basePageName = "Features";
  const basePageEndpoint = "features";
</script>

<ContentPage
  {basePageName}
  {basePageEndpoint}
  bind:activeSubpage={params.subpage}
/>
