<script lang="ts">
  // intentionally blank
</script>

<div class="pt-20 pb-10 w-full bg-gradient-dark flex justify-center">
  <div
    class="w-full xl:max-w-screen-xl px-4 flex flex-col justify-center items-center"
  >
    <div class="text-center">
      <h1 class="text-2xl font-bold mb-4 drop-shadow-md text-white">
        Sims 4 Toolkit in VS Code
      </h1>
      <p class="text-white">Build packages with S4TK, no scripting required.</p>
    </div>
    <div
      class="w-full py-10 flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-20"
    >
      <img
        class="max-w-full md:max-w-lg preview-img"
        src="./assets/s4tk-vscode-preview.png"
        alt="Preview"
      />
      <div class="text-center md:text-left">
        <ul class="">
          <li class="text-white">
            <img
              src="./assets/checkmark.svg"
              alt="Check"
              class="svg-light h-4 inline-block"
            /> Loose XML files
          </li>
          <li class="text-white">
            <img
              src="./assets/checkmark.svg"
              alt="Check"
              class="svg-light h-4 inline-block"
            /> Inferred resource keys
          </li>
          <li class="text-white">
            <img
              src="./assets/checkmark.svg"
              alt="Check"
              class="svg-light h-4 inline-block"
            /> Easy string tables
          </li>
          <li class="text-white">
            <img
              src="./assets/checkmark.svg"
              alt="Check"
              class="svg-light h-4 inline-block"
            /> Use source control
          </li>
        </ul>
        <a
          class="ml-0 md:ml-5 mt-4 zoom-on-hover inline-block no-underline hover:cursor-pointer"
          href="#/features"
        >
          <div
            class="px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-md shadow-md"
          >
            <div class="flex gap-2 items-center justify-center">
              <h4 class="whitespace-nowrap">And more</h4>
              <img
                class="svg w-4 h-4"
                src="./assets/arrow-forward.svg"
                alt="Arrow"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="text-center text-xs opacity-80">
      <p class="mb-2 text-white dark:text-white">
        The Sims™ and its plumbob icon are registered trademarks of Electronic
        Arts, Inc. (EA). Sims 4 Toolkit is not affiliated with or endorsed by
        EA.
      </p>
      <p class="text-white dark:text-white">
        Visual Studio Code, VS Code, and the Visual Studio Code icon are
        registered trademarks of Microsoft Corporation.
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  img.preview-img {
    filter: drop-shadow(2px 2px 8px var(--color-shadow));
    -webkit-filter: drop-shadow(2px 2px 8px var(--color-shadow));
  }
</style>
