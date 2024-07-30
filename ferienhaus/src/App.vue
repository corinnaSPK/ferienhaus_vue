<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
	<Navigation></Navigation>

	<RouterView v-slot="{ Component }">
		<transition name="fade"><Component :is="Component"></Component> </transition
	></RouterView>
	<Footer></Footer>
</template>

<style>
.fade-enter-from,
.fade-enter-leave {
	opacity: 0;
	scale: 0.3;
}
.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s ease;
}
</style>
