<script lang="ts">
  import ContentPage from "src/pages/ContentPage.svelte";

  export let params: { subpage?: string } = {};

  const basePageName = "Learn";
  const basePageEndpoint = "learn";
</script>

<ContentPage
  {basePageName}
  {basePageEndpoint}
  bind:activeSubpage={params.subpage}
/>
