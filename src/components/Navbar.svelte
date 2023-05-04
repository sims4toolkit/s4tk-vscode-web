<script lang="ts">
  import { link } from "svelte-spa-router";
  import Settings from "src/lib/settings";
  import NavbarLink from "./NavbarLink.svelte";

  // redundant so icon can react without accessing settings
  let isLightTheme = Settings.isLightTheme;
  $: themeIcon = isLightTheme ? "sunny" : "moon";

  function toggleTheme() {
    Settings.isLightTheme = !Settings.isLightTheme;
    isLightTheme = Settings.isLightTheme;
  }
</script>

<nav
  class="fixed top-0 left-0 right-0 h-10 z-10 px-4 flex justify-between gap-4 blurred-bg bottom-shadow"
>
  <a
    class="flex gap-2 items-center no-underline tint-on-hover whitespace-nowrap"
    href="/"
    use:link
  >
    <img src="./assets/s4tk-vscode.png" alt="S4TK" class="h-5" />
    <h2 class="font-bold">S4TK &times; VS Code</h2>
  </a>
  <div class="flex gap-4 items-center">
    <NavbarLink href="/features" icon="sparkles" alt="Star" title="Features" />
    <NavbarLink href="/docs" icon="library" alt="Books" title="Documentation" />
    <NavbarLink href="/updates" icon="newspaper" alt="News" title="Updates" />
    <button on:click={toggleTheme} title="Theme">
      <img
        src="./assets/{themeIcon}-outline.svg"
        alt={isLightTheme ? "Sun" : "Moon"}
        class="svg tint-on-hover h-5"
      />
    </button>
  </div>
</nav>

<style lang="scss">
  nav {
    overflow: visible !important;
  }
</style>
