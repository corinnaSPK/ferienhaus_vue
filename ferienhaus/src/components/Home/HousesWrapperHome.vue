<template>
	<div class="dgridcenter house-wrapper text-center" ref="houseWrapper">
		<div
			v-for="house in houses"
			:key="`house-${house.id}`"
			class="house-card"
			ref="card"
		>
			<img :src="`../../../public/img/${house.imgmain}`" alt="" />
			<div class="card-main p-3">
				<h3 class="fs-head-3 space-1">{{ house.name }}</h3>
				<p class="fs-copy">{{ house.copyshort }}</p>
				<p class="fs-copy">{{ house.pers }} Personen</p>
				<p class="fs-copy">{{ house.sz }} SZ</p>
				<p class="fs-copy">{{ house.groeße }} m&sup2;</p>

				<button class="fs-copy uppercase">Mehr erfahren</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import housesData from "../../data/houses.json";
const houseWrapper = ref(null);
const houses = ref(housesData);
const card = ref([]);
import { usefadeInLeftChildren } from "@/composables/fadeInLeftChildren.js";

onMounted(() => {
	usefadeInLeftChildren(houseWrapper.value);
	console.log(card.value);
});
</script>

<style lang="css" scoped>
.house-wrapper {
	gap: 3rem;
}
.house-card {
	margin: auto;
	width: clamp(250px, 80%, 800px);
}

.house-card img {
	max-width: 300px;
	max-height: 300px;
	aspect-ratio: 1;
	margin: auto;
}
button {
	padding: 1em 2em;
}

h3::after {
	content: "";
	display: block;
	height: 1px;
	width: 125px;
	background-color: var(--cl-dark-accent);
	background-color: white;
	opacity: 0.3;
	margin: 0.85rem auto;
}

@media screen and (min-width: 700px) {
	.house-card:nth-child(even) {
		display: flex;
		flex-direction: row;
	}
	.house-card:nth-child(odd) {
		display: flex;
		flex-direction: row-reverse;
	}
}
</style>
