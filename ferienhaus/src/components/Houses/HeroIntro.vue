<template>
	<div class="p-3">
		<div class="intro__copy mb-5rem mcenter width-copy">
			<h1 class="fs-head-main fw-lighter mb-5em ff-serif">{{ house.name }}</h1>
			<h2 class="fs-head-2 fw-lighter mb-5em ff-serif">Willkommen</h2>
			<p class="fs-copy">
				{{ house.copylong }}
			</p>
		</div>
		<ul class="intro__imgs flexwrap">
			<li v-for="img in house.imgintro">
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
.intro__imgs {
	padding-inline: 5rem;
}
.flexwrap > * {
	flex-direction: row;
	flex: 0 1 clamp(100px, 20%, 250px);
	margin: 0 auto;
}
img {
	aspect-ratio: 1;
}
</style>
