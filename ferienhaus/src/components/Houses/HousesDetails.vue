<template>
	<section class="p3">
		<div class="intro_copy mb-5rem mcenter width-copy">
			<div class="mb-5rem">
				<h3 class="fs-head-3 ff-serif uppercase fw-lighter mb-5em">
					Wohnbereich
				</h3>
				<p class="fs-copy mb-3rem">
					WLAN | Flachbild-TV | Kamin | Terrasse mit Strandkorb
				</p>
				<div class="dflexcol bereich__detail">
					<img src="../../assets/img/kamin_mg_quer.jpg" alt="" srcset="" />
					<p class="fs-copy">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
						sunt deleniti! Molestias, necessitatibus exercitationem. Officia
						possimus unde numquam eveniet aliquam at voluptatibus expedita harum
						accusantium alias dolores dignissimos aut, ullam accusamus dolorem.
					</p>
					<!-- <p class="fs-copy">{{ house.copywohnen }}</p> -->
				</div>
			</div>

			<div class="mb-5rem">
				<h3 class="fs-head-3 ff-serif uppercase fw-lighter mb-5em">
					Wohnbereich
				</h3>
				<p class="fs-copy mb-3rem">
					2 SZ | 4 Pers. | Doppelbett 180 x 200 cm | 2 Einzelbetten 90 x 200 cm
				</p>
				<div class="dflexcol reverse bereich__detail">
					<img src="../../assets/img/liegen_mg_quer.jpg" alt="" srcset="" />

					<p class="fs-copy">{{ house.copywohnen }}</p>
				</div>
			</div>
			<div class="mb-5rem">
				<h3 class="fs-head-3 ff-serif uppercase fw-lighter mb-5em">Küche</h3>
				<p class="fs-copy mb-3rem">
					Herd mit 4 Platten | Ceranfeld | Filterkaffemaschine | Toaster |
					Backofen | Kühl-Gerfrier-Kombination | Geschirrspüler
				</p>

				<p class="fs-copy">{{ house.copykitchen }}</p>
			</div>
			<div class="mb-5rem">
				<h3 class="fs-head-3 ff-serif uppercase fw-lighter mb-5em">Bad</h3>
				<p class="fs-copy mb-3rem">Tageslichtbad | Sauna | ebenerdige Dusche</p>

				<p class="fs-copy">{{ house.copybad }}</p>
			</div>
			<div class="mb-5rem">
				<h3 class="fs-head-3 ff-serif uppercase fw-lighter mb-5em">
					Willkommen
				</h3>

				<p class="fs-copy">{{ house.copyaussen }}</p>
			</div>
		</div>
		<h2>Buchungskalender</h2>
		<TestisHome></TestisHome>

		<!-- <Gallery :house="house"></Gallery> -->
	</section>
</template>

<script setup>
import Gallery from "../Gallery.vue";
import TestisHome from "../Home/TestisHome.vue";

const { house } = defineProps(["house"]);
const getImageUrl = (path) => {
	return new URL(`../../assets/img/${path}`, import.meta.url).href;
};
// <img :src="getImageUrl(house.imgmain)" alt="" srcset="" />
</script>

<style lang="css" scoped>
.bereich__detail {
	align-items: center;
	gap: 4rem;
}
.bereich__detail > * {
	/* padding: 3rem; */
	border: 2px solid teal;
}
@media (min-width: 60rem) {
	.bereich__detail {
		flex-direction: row;
		border: 3px solid red;
	}
	.bereich__detail > * {
		width: 50%;
	}
	.reverse {
		flex-direction: row-reverse;
	}
}
</style>
