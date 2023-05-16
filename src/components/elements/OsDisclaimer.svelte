<script lang="ts">
  import Settings from "src/lib/settings";

  export let onDismiss: () => void;

  function onCloseButtonClicked() {
    Settings.hasSeenOsDisclaimer = true;
    onDismiss();
  }
</script>

<div
  class="relative mx-auto flex flex-col sm:flex-row items-center py-8 sm:py-4 px-8 rounded-md shadow-md bg-gray-50 dark:bg-gray-900"
>
  <img
    class="h-12 sm:h-8 svg macos"
    src="./assets/logo-apple.svg"
    alt="macOS"
  />
  <img
    class="h-12 sm:h-8 svg windows"
    src="./assets/logo-windows.svg"
    alt="Windows"
  />
  <div class="sm:ml-8 ml-0 mt-8 sm:mt-0 text-center sm:text-left">
    <p class="mb-1 font-bold">
      Showing tips for <span class="windows">Windows</span><span class="macos"
        >macOS</span
      >
    </p>
    <p class="text-subtle text-sm">
      For
      <span class="windows text-subtle">macOS</span><span
        class="macos text-subtle">Windows</span
      >, click the OS icon in the navbar
    </p>
  </div>
  <button on:click={onCloseButtonClicked}
    ><img
      class="absolute top-4 right-4 h-6 svg zoom-on-hover"
      src="./assets/close.svg"
      alt="X"
    /></button
  >
</div>
