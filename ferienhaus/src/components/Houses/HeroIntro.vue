<template>
	<div class="p-3">
		<div class="intro_copy mb-5rem mcenter width-copy">
			<h2 class="fs-head-2 fw-lighter mb-5em">Willkommen</h2>
			<p class="fs-copy">
				{{ house.copylong }}
			</p>
		</div>
		<ul class="intro_imgs flexwrap">
			<li v-for="img in house.imgintro">
				<!-- <img :src="`../src/assets/img/${img}`" alt="" srcset="" /> -->
				<img :src="getImageUrl(img)" alt="" srcset="" />
			</li>
		</ul>
	</div>
</template>

<script setup>
const { house } = defineProps(["house"]);
const getImageUrl = (path) => {
	return new URL(`../../assets/img/${path}`, import.meta.url).href;
};
</script>

<style lang="css" scoped>
.flexwrap > * {
	flex-direction: row;
	flex: 0 1 clamp(100px, 20%, 300px);
	margin: 0 auto;
}
img {
	aspect-ratio: 1;
}
</style>
