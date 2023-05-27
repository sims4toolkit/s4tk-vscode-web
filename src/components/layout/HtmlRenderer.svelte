<script lang="ts">
  import { getImageSource } from "src/lib/data";

  export let basePageEndpoint: string;
  export let htmlContent: string;

  let wrapper: HTMLDivElement;

  $: {
    if (htmlContent && wrapper) setHtmlContent();
  }

  function setHtmlContent() {
    // using innerHTML rather than {@html} because imgs need to be updated every
    // time htmlContent changes, and reactive blocks run before the HTML content
    // is actually generated
    wrapper.innerHTML = htmlContent;

    const imgs = wrapper.getElementsByTagName("img");
    if (!imgs) return;

    for (let i = 0; i < imgs.length; ++i) {
      const img = imgs[i];

      // set source
      const relSrc = img.attributes.getNamedItem("data-src");
      if (!relSrc?.value) return;
      img.src = getImageSource(basePageEndpoint, relSrc.value);
    }
  }
</script>

<div bind:this={wrapper} class="html-renderer" />

<style lang="scss" global>
  // this must be global or else the class names get mangled, which does not
  // work with dynamically loaded HTML
  .html-renderer {
    h2 {
      font-size: 1.2rem;
      font-weight: bold;
      margin-top: 1.5rem;
      margin-bottom: 1rem;
      color: var(--color-accent);
    }

    h4 {
      color: var(--color-text-subtle);
      font-weight: bold;
      text-transform: uppercase;
      font-size: 0.9rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    hr {
      margin: 1.5rem 0;
      border-color: var(--color-text-subtle);
    }

    a,
    code {
      color: var(--color-accent-secondary);
    }

    code {
      overflow-wrap: break-word;
    }

    ol {
      list-style-type: decimal;
      padding-left: 1.6rem;
    }

    ul {
      list-style-type: disc;
      padding-left: 1.2rem;
    }

    li:not(:first-child) {
      margin-top: 0.3rem;
    }

    img.inline-svg {
      filter: var(--filter-svg);
      height: 1.1rem;
      margin: 0 2px;
      display: inline-block;
    }

    .feature-img-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin: 2rem 0;
    }

    img.feature-img {
      filter: drop-shadow(2px 2px 8px var(--color-shadow));
      -webkit-filter: drop-shadow(2px 2px 8px var(--color-shadow));
    }

    .paragraphs {
      & > p,
      & > ul {
        & + ul,
        & + p:not(.footnote) {
          margin-top: 1rem;
        }
      }
    }

    .footnote {
      color: var(--color-text-subtle);
      font-size: 0.85rem;
      margin-top: 0.15rem;

      .superscript {
        color: var(--color-text-subtle);
      }
    }

    .superscript {
      font-size: 0.65rem;
      vertical-align: super;
    }

    .danger {
      color: var(--color-danger);
    }
  }
</style>
