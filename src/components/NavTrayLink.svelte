<script lang="ts">
  import { link } from "svelte-spa-router";

  export let href: string;
  export let icon: string;
  export let alt: string;
  export let title: string;
  export let onClick: () => void;
</script>

<a
  use:link
  {href}
  {title}
  class="flex gap-4 items-center no-underline zoom-on-hover"
  on:click={onClick}
>
  <img class="svg h-6" src="./assets/{icon}.svg" {alt} />
  <p class="text-2xl">{title}</p>
</a>
