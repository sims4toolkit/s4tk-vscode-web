<script lang="ts">
  import { link, location } from "svelte-spa-router";

  export let href: string;
  export let icon: string;
  export let alt: string;
  export let title: string;

  $: pageActive = $location === href;
  $: currentIcon = pageActive ? icon : `${icon}-outline`;
</script>

<a
  class="relative flex items-center gap-2 no-underline text-sm tint-on-hover"
  class:pointer-events-none={pageActive}
  {href}
  use:link
>
  <img src="./assets/{currentIcon}.svg" {alt} class="svg h-5" />
  {title}
  <hr
    class="absolute -bottom-2 w-full border border-solid border-accent-secondary-light dark:border-accent-secondary-dark"
    class:hidden={!pageActive}
  />
</a>
