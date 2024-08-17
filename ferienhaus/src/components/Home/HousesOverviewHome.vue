<template>
	<section class="houses p-3-in mb1" id="houses">
		<HousesIntroHome></HousesIntroHome>
		<HousesWrapperHome></HousesWrapperHome>
	</section>
</template>

<script setup>
import HousesIntroHome from "@/components/Home/HousesIntroHome.vue";
import HousesWrapperHome from "@/components/Home/HousesWrapperHome.vue";
</script>

<style lang="css" scoped>
.houses {
	background-image: linear-gradient(
		to bottom,

		var(--cl-bg-nav),
		var(--cl-dark-accent) /* white */
	);
}
/* 
.houses::after {
	display: block;

	content: "";
	width: 70vw;
	height: 1px;
	margin-top: 10rem;
	margin-inline: auto;
	background-color: white;
} */
</style>
