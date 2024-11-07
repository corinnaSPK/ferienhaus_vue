<template>
	<div class="houses">
		<h3 class="fs-head-3 ff-serif mb-7rem text-center uppercase">
			Unsere Unterkünfte
		</h3>
		<div class="house__wrapper text-center" ref="houseWrapper">
			<div
				v-for="house in houses"
				:key="`house-${house.id}`"
				class="house__card"
			>
				<div class="img__wrapper">
					<img :src="getImageUrl(house.imgmain)" alt="" />
				</div>
				<div class="card__main p-3-in">
					<h3 class="house__name fs-head-3 space-1 mb-3rem ff-serif">
						{{ house.name }}
					</h3>
					<ul class="fs-copy mb-3rem">
						<li>
							<!-- 	<svg
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
						</svg> -->
							{{ house.pers }} Personen
						</li>
						<li>|</li>
						<li>
							<!-- 	<svg
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
						</svg> -->
							{{ house.sz }} SZ
						</li>
						<li>|</li>

						<li>
							<!-- 						<svg
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
						</svg> -->
							{{ house.groeße }} m&sup2;
						</li>
					</ul>
					<!-- <p class="fs-copy mb-3rem">
						{{ house.copyshort }}
					</p> -->

					<!-- <RouterLink
					:to="`/house/${house.path}`"
					class="fs-copy uppercase cl-text-dark-accent mt-10rem"
				>
					Mehr erfahren
				</RouterLink> -->

					<button
						class="fs-copy uppercase cl-text-dark-accent btn--cta mb-5rem"
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

			<div
				v-for="house in houses"
				:key="`house-${house.id}`"
				class="house__card"
			>
				<div class="img__wrapper">
					<img :src="getImageUrl(house.imgmain)" alt="" />
				</div>
				<div class="card__main p-3-in">
					<h3 class="house__name fs-head-3 space-1 mb-3rem ff-serif">
						{{ house.name }}
					</h3>
					<ul class="fs-copy mb-3rem">
						<li>
							<!-- 	<svg
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
						</svg> -->
							{{ house.pers }} Personen
						</li>
						<li>|</li>
						<li>
							<!-- 	<svg
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
						</svg> -->
							{{ house.sz }} SZ
						</li>
						<li>|</li>

						<li>
							<!-- 						<svg
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
						</svg> -->
							{{ house.groeße }} m&sup2;
						</li>
					</ul>
					<!-- <p class="fs-copy mb-3rem">
						{{ house.copyshort }}
					</p> -->

					<!-- <RouterLink
					:to="`/house/${house.path}`"
					class="fs-copy uppercase cl-text-dark-accent mt-10rem"
				>
					Mehr erfahren
				</RouterLink> -->

					<button
						class="fs-copy uppercase cl-text-dark-accent btn--cta mb-5rem"
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
	display: flex;
	flex-direction: column;
	gap: 6rem;
	/* max-width: 1000px; */
	padding-inline: 5rem;
}

.house__card {
	margin-inline: auto;
	width: clamp(280px, 80%, 300px);
	/* border: 1px solid rgba(255, 255, 255, 0.555); */
	/* border: 1px solid var(--cl-bg-nav); */
	/* padding: 3rem; */
	/* padding-block: 5rem; */
	display: flex;
	flex-direction: column;
	gap: 5rem;
	/* background-color: hsl(240, 74%, 13%); */
	/* box-shadow: 3px 3px 300px #171717; */
	/* box-shadow: 5px 5px 300px rgba(255, 255, 255, 0.3); */
	/* box-shadow: 10px 10px var(--cl-bg-nav); */
	/* 	display: flex;
	flex-direction: column; */
	background-image: linear-gradient(
		45deg,
		/* red 2%, */ var(--cl-dark-accent-opa),
		hsla(240, 50%, 13%, 0.673)
	);
	box-shadow: 0px 0px 100px rgb(88, 88, 159);
}

.house__card img {
	/* max-width: 300px; */
	/* max-height: 300px; */
	/* width: clamp(150px, 200px, 400px); */
	/* height: auto; */
	/* aspect-ratio: 1; */
	/* margin: auto; */
	width: 100%;
	height: 100%;
	object-fit: cover;
	/* box-shadow: 0px 0px 70px rgb(88, 88, 159); */
	/* border-radius: 50px; */
	/* clip-path: ellipse(49% 31% at 50% 50%); */
	/* background-image: radial-gradient(transparent, red); */
	position: relative;
}
.house__card img::after {
	content: "";
	width: 10px;
	height: 10px;
	background: teal;
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

.house__name::after {
	content: "";
	display: block;
	height: 1px;
	width: 125px;
	background-color: var(--cl-dark-accent);
	background-color: white;
	opacity: 0.3;
	margin: 1.2rem auto 0;
}
ul {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	gap: 5px;
	font-weight: 300;
}
@media screen and (min-width: 800px) {
	.house__wrapper {
		flex-direction: row;
		flex-wrap: wrap;
		padding-inline: 20rem;
	}
}
button {
	/* border-radius: 50px; */
}
</style>
