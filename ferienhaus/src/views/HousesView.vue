<template>
	<div>
		<HeroHouse :house="house"></HeroHouse>
		<HeroIntro :house="house"></HeroIntro>
		<Carousel :house="house"></Carousel>
	</div>
	<!-- <ul class="p-3">
			<li>gallery</li>
			<li>ausstattung</li>
			<li>testi</li>
			<li>verfügbarkeit</li>
	</ul> -->
	<!-- <Carousel></Carousel> -->
</template>

<script setup>
import HeroHouse from "../components/Houses/HeroHouse.vue";
import HeroIntro from "../components/Houses/HeroIntro.vue";
import Carousel from "../components/carousel/Carousel.vue";

import { ref } from "vue";
import { useRoute } from "vue-router";
import housesData from "../data/houses.json";
const route = useRoute();

const houses = ref(housesData);
const housePath = ref(route.params.path);

const house = houses.value.find((house) => house.path === housePath.value);
</script>

<style lang="css" scoped>
div {
	margin-top: 100px;
	/* min-height: 90vh; */
}
</style>
