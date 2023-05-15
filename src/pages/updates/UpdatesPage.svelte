<script lang="ts">
  import ContentPage from "src/pages/ContentPage.svelte";

  export let params: { subpage?: string } = {};

  const basePageName = "Updates";
  const basePageEndpoint = "updates";
</script>

<ContentPage
  {basePageName}
  {basePageEndpoint}
  bind:activeSubpage={params.subpage}
/>
