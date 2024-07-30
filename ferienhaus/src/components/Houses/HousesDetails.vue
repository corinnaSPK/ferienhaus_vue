<template>
	<section class="p3">
		<div class="intro_copy mb-5rem mcenter width-copy">
			<div class="mb-3rem">
				<h3 class="fs-head-3 fw-lighter mb-5em">Willkommen</h3>

				<p class="fs-copy">{{ house.copywohnen }}</p>
			</div>
			<div class="mb-3rem">
				<h3 class="fs-head-3 fw-lighter mb-5em">Willkommen</h3>

				<p class="fs-copy">{{ house.copysz }}</p>
			</div>
			<div class="mb-3rem">
				<h3 class="fs-head-3 fw-lighter mb-5em">Willkommen</h3>

				<p class="fs-copy">{{ house.copykitchen }}</p>
			</div>
			<div class="mb-3rem">
				<h3 class="fs-head-3 fw-lighter mb-5em">Willkommen</h3>

				<p class="fs-copy">{{ house.copybad }}</p>
			</div>
			<div class="mb-3rem">
				<h3 class="fs-head-3 fw-lighter mb-5em">Willkommen</h3>

				<p class="fs-copy">{{ house.copyaussen }}</p>
			</div>
		</div>

		<!-- <Gallery :house="house"></Gallery> -->
	</section>
</template>

<script setup>
import Gallery from "../Gallery.vue";

const { house } = defineProps(["house"]);
const getImageUrl = (path) => {
	return new URL(`../../assets/img/${path}`, import.meta.url).href;
};
// <img :src="getImageUrl(house.imgmain)" alt="" srcset="" />
</script>

<style lang="css" scoped></style>
