<template>
	<div class="house_hero">
		<div class="right">
			<img :src="getImageUrl(house.imgmain)" alt="" srcset="" />
		</div>
		<div class="left dgridcenter cl-text-dark-accent fs-head-main p-3">
			<h1 class="head_hero fs-head-main ff-sansserif uppercase space-3">
				{{ house.name }}
			</h1>
		</div>
	</div>
</template>

<script setup>
const { house } = defineProps(["house"]);
const getImageUrl = (path) => {
	return new URL(`../../assets/img/${path}`, import.meta.url).href;
};
</script>

<style lang="css" scoped>
.house_hero {
	display: grid;
	grid-template-areas: "hero";
	max-width: 700px;
	/* width: clamp(200px, 600px, 900px); */
	/* border: 1px solid white; */
	margin-right: 20px;
	margin-left: 10vw;
	margin-inline: auto;
}

.house_hero > * {
	grid-area: hero;
}
.right {
	width: 90%;
	/* width: clamp(200px, 500px, 70vw); */
	margin-left: auto;
	/* border: 1px solid red; */
	/* overflow: hidden; */
	margin-right: 10px;
}
.right img {
	border: none;
	height: 100%;
	/* width: 70vw; */
}
.left {
	/* width: 110%; */
	width: fit-content;
	/* width: 60vw; */
	margin-block: auto;
	background-color: rgba(255, 255, 255, 0.8);
	/* margin-left: -40px; */
	margin-left: 10px;
}
.head_hero {
	font-weight: lighter;
}
</style>
