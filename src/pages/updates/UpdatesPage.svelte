<script lang="ts">
  import Sidenav from "src/components/layout/Sidenav.svelte";

  export let params: { version?: string } = null;
</script>

<svelte:head>
  <title>S4TK &times; VS Code | Updates</title>
</svelte:head>

<section class="flex-1 w-full flex flex-col items-center">
  <div
    class="mt-20 w-full xl:max-w-screen-xl px-4 flex flex-col justify-center"
  >
    <Sidenav
      basePage="updates"
      basePageName="Updates"
      activeSubpage={params?.version}
      items={[
        {
          title: "Second",
          subpage: "0-1-0-a-2",
        },
        {
          title: "First",
          subpage: "0-1-0-a-1",
        },
      ]}
    />
  </div>
</section>
