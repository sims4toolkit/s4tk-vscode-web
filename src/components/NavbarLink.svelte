<script lang="ts">
  import { link, location } from "svelte-spa-router";

  export let href: string;
  export let icon: string;
  export let alt: string;
  export let title: string;

  $: pageActive = $location === href;
  $: currentIcon = pageActive ? icon : `${icon}-outline`;
</script>

<div class="navlink relative" class:at-destination={pageActive}>
  <a
    use:link
    {href}
    {title}
    class="flex gap-2 items-center no-underline"
    class:pointer-events-none={pageActive}
  >
    <img src="./assets/{currentIcon}.svg" {alt} class="svg h-5" />
    <p class="text-md hidden sm:inline-block">{title}</p>
  </a>
  <hr
    class="invisible opacity-0 absolute left-0 -bottom-1 right-full rounded border border-solid border-accent-secondary-light dark:border-accent-secondary-dark"
  />
</div>

<style lang="scss">
  .navlink.at-destination,
  .navlink:hover {
    hr {
      visibility: visible;
      opacity: 1;
      right: 0;
      transition: visibility 0s, right 300ms ease-out, opacity 300ms ease-out;
    }
  }
</style>
