<script setup>
import HeroHome from "@/components/Home/HeroHome.vue";
import IntroHome from "@/components/Home/IntroHome.vue";
import HousesOverviewHome from "@/components/Home/HousesOverviewHome.vue";
import TestisHome from "@/components/Home/TestisHome.vue";

import ZitatHome from "@/components/Home/ZItatHome.vue";
</script>

<template>
	<main class="cl-text-light">
		<HeroHome></HeroHome>
		<div class="main_wrapper"></div>
		<IntroHome></IntroHome>
		<ZitatHome></ZitatHome>
		<HousesOverviewHome></HousesOverviewHome>
		<TestisHome></TestisHome>
	</main>
</template>

<style>
.main_wrapper {
	padding-inline: 3rem;
}
</style>
