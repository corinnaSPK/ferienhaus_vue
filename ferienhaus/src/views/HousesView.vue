<template>
	<div>
		<HeroHouse :house="house"></HeroHouse>
		<HeroIntro :house="house"></HeroIntro>
		<HousesDetails :house="house"></HousesDetails>
	</div>
</template>

<script setup>
import HeroHouse from "../components/Houses/HeroHouse.vue";
import HeroIntro from "../components/Houses/HeroIntro.vue";
import HousesDetails from "../components/Houses/HousesDetails.vue";

import { ref, watch, onMounted, onBeforeMount, computed } from "vue";
import { useRoute } from "vue-router";
import housesData from "../data/houses.json";
const route = useRoute();

const houses = ref(housesData);
const housePath = ref(route.params.path);

const housename = houses.value.find((house) => house.path === housePath.value);
const house = ref(null);
onBeforeMount(() => (house.value = housename));
watch(
	() => route.params.path,
	(newId, oldId) => {
		house.value = houses.value.find((house) => house.path === newId);
	}
);
</script>

<style lang="css" scoped>
div {
	margin-top: 100px;
	/* min-height: 90vh; */
}
</style>
