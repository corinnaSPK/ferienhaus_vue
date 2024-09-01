<template>
	<div class="dgridcenter house__wrapper text-center" ref="houseWrapper">
		<div
			v-for="house in houses"
			:key="`house-${house.id}`"
			class="house__card cl-background-ligth-accent"
		>
			<img :src="getImageUrl(house.imgmain)" alt="" />
			<div class="card-main p-3">
				<h3 class="fs-head-3 space-1">{{ house.name }}</h3>
				<p class="fs-copy mb-3rem">
					{{ house.copyshort }}
				</p>
				<ul class="fs-copy mb-3rem">
					<li>
						<svg
							aria-hidden="true"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							height="16"
							width="14"
							viewBox="0 0 448 512"
						>
							<path
								d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
							/>
						</svg>
						{{ house.pers }} Personen
					</li>
					<li>
						<svg
							aria-hidden="true"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							height="16"
							width="14"
							viewBox="0 0 448 512"
						>
							<path
								d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
							/>
						</svg>
						{{ house.sz }} SZ
					</li>
					<li>
						<svg
							aria-hidden="true"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							height="16"
							width="14"
							viewBox="0 0 448 512"
						>
							<path
								d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
							/>
						</svg>
						{{ house.groeße }} m&sup2;
					</li>
				</ul>
				<!-- <RouterLink
					:to="`/house/${house.path}`"
					class="fs-copy uppercase cl-text-dark-accent mt-10rem"
				>
					Mehr erfahren
				</RouterLink> -->

				<button
					class="fs-copy uppercase cl-text-dark-accent btn--cta"
					@click="
						() => {
							router.push(`/house/${house.path}`);
						}
					"
				>
					Entdecken
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter, RouterLink } from "vue-router";

import { ref, onMounted } from "vue";

import housesData from "../../data/houses.json";

const router = useRouter();
const houseWrapper = ref(null);
const houses = ref(housesData);

const getImageUrl = (path) => {
	return new URL(`../../assets/img/${path}`, import.meta.url).href;
};
import { usefadeInLeftChildren } from "@/composables/fadeInLeftChildren.js";

onMounted(() => {
	usefadeInLeftChildren(houseWrapper.value);
});
// usefadeInLeftChildren(houseWrapper.value);
</script>

<style lang="css" scoped>
.house__wrapper {
	gap: 6rem;
}

.house__card {
	margin-inline: auto;
	width: clamp(280px, 80%, 800px);
	/* border: 1px solid rgba(255, 255, 255, 0.555); */
	/* border: 1px solid var(--cl-bg-nav); */
	padding: 3rem;
	border-radius: 5px;
	/* background-color: hsl(240, 74%, 13%); */
	/* box-shadow: 3px 3px 300px #171717; */
	/* box-shadow: 5px 5px 300px rgba(255, 255, 255, 0.3); */
	/* box-shadow: 10px 10px var(--cl-bg-nav); */
}

.house__card img {
	max-width: 300px;
	/* max-height: 300px; */
	aspect-ratio: 1;
	margin: auto;
}
svg {
	fill: white;
}
/* button {
	padding: 1em 2em;
	border: 1px solid transparent;
	transition: all ease 0.5s;
	background-color: var(--cl-light);
}
button:hover,
button:focus,
button:focus-visible {
	cursor: pointer;
	background-color: transparent;
	color: white;
	border: 1px solid var(--cl-light-opa);
	transition: all ease 0.5s;
} */

h3::after {
	content: "";
	display: block;
	height: 1px;
	width: 125px;
	background-color: var(--cl-dark-accent);
	background-color: white;
	opacity: 0.3;
	margin: 0.85rem auto;
}

@media screen and (min-width: 800px) {
	.house__card:nth-child(even) {
		display: flex;
		flex-direction: row;
	}
	.house__card:nth-child(odd) {
		display: flex;
		flex-direction: row-reverse;
	}
}
</style>
