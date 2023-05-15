<script lang="ts">
  import type { SubpageIndex } from "src/global";
  import Sidenav from "./Sidenav.svelte";

  export let basePageName: string;
  export let basePageEndpoint: string;
  export let activeSubpage: string | undefined;
  export let subpageIndex: SubpageIndex | undefined;
</script>

<div class="flex flex-col md:flex-row gap-10">
  <Sidenav {basePageName} {basePageEndpoint} {activeSubpage} {subpageIndex} />
  <div>
    <p>Test</p>
  </div>
</div>
