<script setup>
import HeroHome from "@/components/Home/HeroHome.vue";
import IntroHome from "@/components/Home/IntroHome.vue";
import HousesOverviewHome from "@/components/Home/HousesOverviewHome.vue";
import TestisHome from "@/components/Home/TestisHome.vue";
import AccPanel from "@/components/AccPanel.vue";
import ZitatHome from "@/components/Home/ZItatHome.vue";
import FAQ from "@/components/Home/FAQ.vue";
</script>

<template>
	<main class="cl-text-light">
		<ul class="mt-10rem">
			<h4>TOdos</h4>
			<li>Nav links nur cliackble. wenn menu open</li>
			<li>router view für houses aufsetzen</li>
			<li>in nav verlinken</li>
			<li>accesibility für accPanel ergänzen</li>
			<li>slots für accPanel einrichten</li>
			<li>FavIcon</li>
			<li>vuetify und prime deinstallieren</li>
		</ul>
		<HeroHome></HeroHome>
		<div class="main_wrapper"><AccPanel></AccPanel></div>
		<IntroHome></IntroHome>
		<ZitatHome></ZitatHome>
		<HousesOverviewHome></HousesOverviewHome>
		<TestisHome></TestisHome>
		<FAQ></FAQ>
	</main>
</template>

<style>
.main_wrapper {
	padding-inline: 3rem;
}
</style>
