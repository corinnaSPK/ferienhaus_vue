<template>
	<div>
		<main class="cl-text-light">
			<HeroHome></HeroHome>
			<HousesOverviewHome></HousesOverviewHome>
			<!-- <IntroHome></IntroHome> -->
			<!-- <Book></Book> -->
			<!-- <ZitatHome></ZitatHome> -->
			<FAQ></FAQ>

			<!-- <div class="umgebung">
				<h2>Hier kommt ein schöner Text über die Umgebung</h2>

				<p>
					Schönhagen ist ein kleines Ostseebad mit familiärem Charakter, umgeben
					von Natur in einer sauberen Umwelt. Nach Norden in Richtung
					Schleimünde erstreckt sich ein 3 km langer Sandstrand. Südlich erhebt
					sich in Richtung Damp eine Steilküste. Rund um Schönhagen finden Sie
					eine Vielzahl von Rad- und Wanderwegen. Ein sehenswertes typisches
					Ostseestädtchen ist Kappeln an der Schlei (8 km entfernt) mit seinem
					Fischer- Sportboot- und Museumshafen, seinem schnuckeligen Zentrum und
					den gemütlichen Kneipen
				</p>
			</div> -->
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
	/* padding-inline: 3rem; */
}
</style>
