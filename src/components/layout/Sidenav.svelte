<script lang="ts">
  import { link, location, replace } from "svelte-spa-router";
  import type { SubpageIndex } from "src/global";

  export let basePageName: string;
  export let basePageEndpoint: string;
  export let activeSubpage: string | undefined;
  export let subpageIndex: SubpageIndex | undefined;

  let selectedOption: string | undefined = activeSubpage;

  $: subpageIndexLoaded = Boolean(subpageIndex);

  $: {
    selectedOption = activeSubpage;
  }

  $: {
    selectedOption;
    redirectOnSelect();
  }

  function redirectOnSelect() {
    const endpoint = `/${basePageEndpoint}/${selectedOption}`;
    if ($location !== endpoint) replace(endpoint);
  }
</script>

<div class="block md:hidden w-full">
  <h4 class="pl-4 mb-4 uppercase font-bold text-sm">
    {basePageName}
  </h4>
  {#if subpageIndexLoaded}
    <select
      class="border border-solid border-gray-900 dark:border-gray-200 py-2 pl-4 rounded-md w-full"
      bind:value={selectedOption}
    >
      {#each subpageIndex.groups as group, key (key)}
        <optgroup label={group.title}>
          {#each group.pages as page, key (key)}
            <option value={page.endpoint}>{page.title}</option>
          {/each}
        </optgroup>
      {/each}
    </select>
  {:else}
    <p
      class="pl-4 py-1 border-l-2 border-solid border-gray-300 dark:border-gray-700 text-subtle"
    >
      Loading...
    </p>
  {/if}
</div>

<div class="hidden md:block sidenav">
  {#if subpageIndexLoaded}
    {#each subpageIndex.groups as group, key (key)}
      <div class="mb-10">
        <h4
          class="pl-4 mb-4 uppercase font-bold text-sm border-l-2 border-solid border-transparent"
        >
          {group.title}
        </h4>
        {#each group.pages as page, key (key)}
          <a
            use:link
            href="/{basePageEndpoint}/{page.endpoint}"
            class="block no-underline sidenav-item pl-4 py-1 border-l-2 border-solid border-gray-300 dark:border-gray-700"
            class:active={activeSubpage === page.endpoint}
          >
            <h4 class="text-subtle">
              {page.title}
            </h4>
          </a>
        {/each}
      </div>
    {/each}
  {:else}
    <p
      class="pl-4 py-1 border-l-2 border-solid border-gray-300 dark:border-gray-700 text-subtle"
    >
      Loading...
    </p>
  {/if}
</div>

<style lang="scss">
  .sidenav {
    min-width: 250px;

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
  }
</style>
