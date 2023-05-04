<script lang="ts">
  import Router from "svelte-spa-router";
  import Navbar from "src/components/Navbar.svelte";
  import HomePage from "src/pages/HomePage.svelte";
  import NotFoundPage from "src/pages/NotFoundPage.svelte";

  const routes = {
    "/": HomePage,
    "*": NotFoundPage,
  };
</script>

<Navbar />
<main class="min-h-screen flex flex-col">
  <Router {routes} restoreScrollState={true} />
</main>
