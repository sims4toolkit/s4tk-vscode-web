<script lang="ts">
  import { fly } from "svelte/transition";
  import { link } from "svelte-spa-router";
  import Settings from "src/lib/settings";
  import Collapsable from "src/components/layout/Collapsable.svelte";
  import NavbarLink from "./NavbarLink.svelte";
  import NavTrayLink from "./NavTrayLink.svelte";
  import type { NavItem } from "./types";

  let trayVisible = false;
  let isLightTheme = Settings.isLightTheme;
  $: themeIcon = isLightTheme ? "sunny" : "moon";

  const navItems: NavItem[] = [
    {
      href: "/features",
      title: "Features",
      icon: "sparkles",
      alt: "Star",
    },
    {
      href: "/docs",
      title: "Documentation",
      icon: "library",
      alt: "Books",
    },
    {
      href: "/updates",
      title: "Updates",
      icon: "newspaper",
      alt: "News",
    },
  ];

  function toggleTheme() {
    Settings.isLightTheme = !Settings.isLightTheme;
    isLightTheme = Settings.isLightTheme;
  }

  function closeTray() {
    trayVisible = false;
  }
</script>

<nav
  class="fixed top-0 left-0 right-0 h-10 z-40 px-4 flex justify-between gap-4 blurred-bg bottom-shadow"
>
  <a
    use:link
    href="/"
    class="flex gap-2 items-center no-underline tint-on-hover whitespace-nowrap"
    on:click={closeTray}
  >
    <img src="./assets/s4tk-vscode.png" alt="S4TK" class="h-5" />
    <h2 class="font-bold">S4TK &times; VS Code</h2>
  </a>
  <Collapsable bind:expanded={trayVisible}>
    <div class="flex gap-4 sm:gap-6 items-center">
      {#each navItems as navItem, key (key)}
        <NavbarLink {navItem} />
      {/each}
      <button on:click={toggleTheme} title="Theme">
        <img
          src="./assets/{themeIcon}-outline.svg"
          alt={isLightTheme ? "Sun" : "Moon"}
          class="svg tint-on-hover h-5"
        />
      </button>
    </div>
  </Collapsable>
</nav>

{#if trayVisible}
  <div
    transition:fly={{ x: 500, duration: 150 }}
    class="fixed top-0 left-0 w-screen h-screen pt-16 flex flex-col justify-center items-center gap-8 z-30 blurred-bg"
  >
    {#each navItems as navItem, key (key)}
      <NavTrayLink {navItem} onClick={closeTray} />
    {/each}
    <button
      on:click={toggleTheme}
      class="flex items-center gap-4 zoom-on-hover absolute bottom-8"
    >
      <img
        src="./assets/{themeIcon}-outline.svg"
        alt={isLightTheme ? "Sun" : "Moon"}
        class="svg tint-on-hover h-5"
      />
      <p class="text-subtle">{isLightTheme ? "Light" : "Dark"} Theme</p>
    </button>
  </div>
{/if}

<style lang="scss">
  nav {
    overflow: visible !important;
  }
</style>
