<script lang="ts">
  import { link } from "svelte-spa-router";
  import type { NavItem } from "./types";

  export let navItem: NavItem;
  export let onClick: () => void;
</script>

<a
  use:link
  href={navItem.href}
  title={navItem.title}
  class="flex gap-4 items-center no-underline zoom-on-hover"
  on:click={onClick}
>
  <img class="svg h-6" src="./assets/{navItem.icon}.svg" alt={navItem.alt} />
  <p class="text-2xl">{navItem.title}</p>
</a>
