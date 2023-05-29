<script lang="ts">
  import SectionSeparator from "src/components/elements/SectionSeparator.svelte";
  import HomeHero from "./HomeHero.svelte";
  import HomePagePanel from "./HomePagePanel.svelte";
</script>

<svelte:head>
  <title>S4TK &times; VS Code</title>
</svelte:head>

<section class="flex-1 w-full flex flex-col items-center">
  <HomeHero />
  <div
    class="my-12 w-full xl:max-w-screen-xl px-4 flex flex-col justify-center"
  >
    <div
      class="w-full flex flex-col md:flex-row md:flex-wrap gap-10 justify-center items-center"
    >
      <HomePagePanel
        linkIcon="vscode.png"
        linkText="Download VS Code"
        linkHref="https://code.visualstudio.com"
        target="_blank"
      />
      <HomePagePanel
        linkIcon="s4tk-transparent.png"
        linkText="Add the S4TK Extension"
        linkHref="https://marketplace.visualstudio.com/items?itemName=sims4toolkit.s4tk-vscode"
        target="_blank"
      />
      <HomePagePanel
        linkIcon="library.svg"
        isSvg={true}
        linkText="Read the Docs"
        linkHref="#/learn"
        target="_self"
      />
    </div>
    <SectionSeparator />
    <div class="flex flex-col sm:flex-row justify-center items-center gap-12">
      <div class="text-center">
        <p class="text-subtle mb-4">Need help? Have suggestions?</p>
        <p class="text-2xl font-bold">Join the Discord!</p>
      </div>
      <a
        class="zoom-on-hover-sm inline-block no-underline hover:cursor-pointer w-60"
        href="https://discord.gg/qNhD3Jh"
        target="_blank"
      >
        <div class="px-6 py-4 bg-brand-discord rounded-md shadow-md w-full">
          <div class="flex gap-4 items-center justify-center">
            <img
              class="svg-light h-8"
              src="./assets/logo-discord.svg"
              alt="icon"
            />
            <h4 class="text-lg text-white">Join Discord</h4>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>
