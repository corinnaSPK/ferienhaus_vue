<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import NavVanilla from "./components/NavVanilla.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
	<!-- struktur: navigation -router-view-footer -->
	<Navigation></Navigation>

	<RouterView></RouterView>
	<Footer></Footer>
</template>

<style></style>
