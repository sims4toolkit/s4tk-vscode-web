<script lang="ts">
  import Router from "svelte-spa-router";
  import Navbar from "src/components/navbar/Navbar.svelte";
  import Footer from "src/components/Footer.svelte";
  import HomePage from "src/pages/home/HomePage.svelte";
  import LearnPage from "src/pages/learn/LearnPage.svelte";
  import FeaturesPage from "src/pages/features/FeaturesPage.svelte";
  import UpdatesPage from "src/pages/updates/UpdatesPage.svelte";
  import NotFoundPage from "src/pages/NotFoundPage.svelte";

  const routes = {
    "/": HomePage,
    "/features": FeaturesPage,
    "/features/:subpage": FeaturesPage,
    "/learn": LearnPage,
    "/learn/:subpage": LearnPage,
    "/updates": UpdatesPage,
    "/updates/:subpage": UpdatesPage,
    "*": NotFoundPage,
  };
</script>

<Navbar />
<main class="min-h-screen flex flex-col">
  <Router {routes} restoreScrollState={true} />
</main>
<Footer />
