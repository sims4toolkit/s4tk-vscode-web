<script lang="ts">
  export let linkIcon: string;
  export let linkText: string;
  export let linkHref: string;
  export let isSvg: boolean = false;
  export let target: "_self" | "_blank" = "_blank";
</script>

<div>
  <a
    class="zoom-on-hover-sm inline-block no-underline hover:cursor-pointer w-72"
    href={linkHref}
    {target}
  >
    <div class="px-6 py-4 bg-gray-700 dark:bg-gray-700 rounded-md shadow-md">
      <div class="flex gap-4 items-center justify-center">
        <img
          class="h-6"
          class:svg-light={isSvg}
          src="./assets/{linkIcon}"
          alt="icon"
        />
        <h4 class="text-lg whitespace-nowrap text-white">
          {linkText}
        </h4>
      </div>
    </div>
  </a>
</div>
