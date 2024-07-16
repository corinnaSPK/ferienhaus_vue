<template>
	<div>
		<HeroHouse :house="house" :key="componentKey"></HeroHouse>
		<HeroIntro :house="house" :key="$route.path"></HeroIntro>
		<Gallery :house="house" :key="$route.params.path"></Gallery>
	</div>
	<!-- <ul class="p-3">
			<li>gallery</li>
			<li>ausstattung</li>
			<li>testi</li>
			<li>verfügbarkeit</li>
	</ul> -->
</template>

<script setup>
import HeroHouse from "../components/Houses/HeroHouse.vue";
import HeroIntro from "../components/Houses/HeroIntro.vue";
import Gallery from "../components/Gallery.vue";

import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import housesData from "../data/houses.json";
const route = useRoute();

const houses = ref(housesData);
const housePath = ref(route.params.path);

const componentKey = ref(0);
const house = houses.value.find((house) => house.path === housePath.value);
watch(
	() => route.params.path,
	(newId, oldId) => {
		componentKey.value = componentKey.value + 1;
		console.log(componentKey.value);
		console.log(route.params.path);
		// react to route changes...
	}
);
</script>

<style lang="css" scoped>
div {
	margin-top: 100px;
	/* min-height: 90vh; */
}
</style>
