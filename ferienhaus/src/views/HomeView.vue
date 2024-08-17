<template>
	<div>
		<main class="cl-text-light">
			<ul class="mt-10rem">
				<h4>TOdos</h4>

				<li>accesibility für accPanel ergänzen</li>
				<li>slots für accPanel einrichten</li>
				<li>FavIcon</li>
				<li>vuetify und prime deinstallieren</li>
			</ul>
			<HeroHome></HeroHome>
			<IntroHome></IntroHome>
			<Book></Book>
			<ZitatHome></ZitatHome>
			<HousesOverviewHome></HousesOverviewHome>
			<TestisHome></TestisHome>
			<FAQ></FAQ>
		</main>
	</div>
</template>
<script setup>
import HeroHome from "@/components/Home/HeroHome.vue";
import IntroHome from "@/components/Home/IntroHome.vue";
import HousesOverviewHome from "@/components/Home/HousesOverviewHome.vue";
import TestisHome from "@/components/Home/TestisHome.vue";
import Book from "@/components/Book.vue";
import ZitatHome from "@/components/Home/ZItatHome.vue";
import FAQ from "@/components/Home/FAQ.vue";
</script>
<style>
.main_wrapper {
	padding-inline: 3rem;
}
</style>
