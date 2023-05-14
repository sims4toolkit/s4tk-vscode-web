<script lang="ts">
  import { link } from "svelte-spa-router";

  export let basePage: string;
  export let basePageName: string;
  export let activeSubpage: string | undefined;
  export let items: { title: string; subpage: string }[];

  $: activeItemIndex = items.findIndex((i) => i.subpage === activeSubpage);
</script>

<div>
  <a
    use:link
    href="/{basePage}"
    class="mb-2 block no-underline sidenav-item pl-4 py-1 border-l-2 border-solid border-transparent"
  >
    <h4 class="uppercase font-bold text-sm">{basePageName}</h4>
  </a>
  {#each items as item, key (key)}
    <a
      use:link
      href="/{basePage}/{item.subpage}"
      class="block no-underline sidenav-item pl-4 py-1 border-l-2 border-solid border-gray-300 dark:border-gray-700"
      class:active={key === activeItemIndex}
    >
      <h4 class="text-subtle">
        {item.title}
      </h4>
    </a>
  {/each}
</div>

<style lang="scss">
  .sidenav-item {
    &.active {
      border-left-color: var(--color-accent);

      h4 {
        color: var(--color-text);
        font-weight: bold;
      }
    }

    &:hover h4 {
      color: var(--color-text);
    }
  }
</style>
