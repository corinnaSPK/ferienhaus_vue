<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
	<Navigation></Navigation>

	<RouterView :key="$route.params.path"></RouterView>
	<!-- <RouterView v-slot="{ Component }">
		<Transition name="slide" mode="out-in">
			<Component :is="Component" :key="$route.params.path"></Component>
		</Transition>
	</RouterView> -->
	<Footer></Footer>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
	transition: opacity 1s, transform 1s;
}
.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	/* transform: translateX(-10%); */
	scale: 0.5;
	/* transform: scale(0.3); */
}
</style>
