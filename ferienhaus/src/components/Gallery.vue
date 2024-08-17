<template>
	<section id="gallery" class="p-3">
		<div class="gallery_wrapper">
			<h3 class="fs-head-3 fw-lighter mb-5em text-center">
				Ein kleiner Einblick in unser Paradies
			</h3>
			<ul class="thumbnail flexwrap">
				<li v-for="(img, index) in images" :key="img">
					<button @click="openLightbox" @keyup.enter="openLightbox" :id="index">
						<!-- <img :src="`../src/assets/img/${img}`" alt="" :id="index" /> -->
						<img :src="getImageUrl(img)" alt="" :id="index" />
					</button>
				</li>
			</ul>
			<Teleport to="body">
				<Modal :modalOpen="modalOpen" @close="closeLightbox">
					<div class="current_image mcenter">
						<!-- <img :src="`../src/assets/img/${images[currentImageIndex]}`" alt="" /> -->
						<img :src="getImageUrl(images[currentImageIndex])" alt="" />
						<div class="buttons_wrapper">
							<button ref="btnPrev" @click="prev">&larr;</button>
							<button ref="btnNext" @click="next">&rarr;</button>
						</div>
					</div>
				</Modal>
			</Teleport>
			<!-- 
			<div class="modal" v-show="modalOpen">
				<button class="btn--close-modal" @click="closeLightbox">&times;</button>
				<div class="current_image mcenter">
					<img :src="`../src/assets/img/${images[currentImageIndex]}`" alt="" />
					<div class="buttons_wrapper">
						<button @click="prev">&larr;</button>
						<button @click="next">&rarr;</button>
					</div>
				</div>
			</div>
			 --></div>
	</section>
</template>

<script setup>
// ! KEy enter function um modal izu öffnen ergänzen
import Modal from "../components/Modal.vue";
import { ref, onMounted, watch, nextTick } from "vue";
const { house } = defineProps(["house"]);
// momentan loopen wir durch ein array mit einfachen strings ["abc", "def", "etc"]; wir müssern aber statt der e3infachen strings ein objekt loopen, das muss im code noch angepasst werden
const images = house.imgintro;
const btnNext = ref(null);
const getImageUrl = (path) => {
	return new URL(`../assets/img/${path}`, import.meta.url).href;
};
const modalOpen = ref(false);

const currentImage = ref(getImageUrl(images[0]));
const currentImageIndex = ref(null);
const openLightbox = (e) => {
	modalOpen.value = true;
	// console.log(e.x === 0);

	if (e.x === 0) {
		console.log(e.target.id);
		// currentImageIndex.value = e.target.id;
		currentImageIndex.value = 0;
	} else {
		currentImage.value = e.target.src;
		currentImageIndex.value = e.target.id;
		currentImageIndex.value = parseInt(currentImageIndex.value);
	}

	if (modalOpen.value) {
		nextTick(() => {});
		nextTick(() => {
			btnNext.value.focus();
		});
	}
};

const closeLightbox = () => {
	modalOpen.value = false;
};

const prev = () => {
	if (currentImageIndex.value === 0)
		currentImageIndex.value = images.length - 1;
	else {
		currentImageIndex.value = currentImageIndex.value - 1;
	}
};

const next = () => {
	console.log("go forw");
	if (currentImageIndex.value === images.length - 1) {
		currentImageIndex.value = 0;
	} else {
		currentImageIndex.value = currentImageIndex.value + 1;
	}
};
/* onMounted(() => {
	console.log(modalOpen.value);
}); */
/* watch(modalOpen, async (newState, oldState) => {
	if (modalOpen) {
		console.log("modal open");
		console.log(btnNext.value);
		btnNext.value.focus();
	}
}); */
</script>

<style lang="css" scoped>
button {
	cursor: pointer;
}
.gallery_wrapper {
	position: relative;
}

.thumbnail button {
	background-color: transparent;
	border: none;
}
.thumbnail li {
	flex: 0 1 clamp(100px, 20%, 300px);
}
.thumbnail img {
	width: 100%;
	aspect-ratio: 1;
	object-fit: cover;
}

.current_image {
	width: 100%;
	max-height: 100%;
	display: grid;
	place-content: center;
	grid-template-areas: "stack";
	overflow: hidden;
}

.current_image > * {
	grid-area: stack;
}

.current_image > img {
	/* max-height: 100%; */
	/* max-width: 100%; */
	object-fit: cover;
	object-position: center;
}

.buttons_wrapper {
	height: 50px;
	align-self: center;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.buttons_wrapper button {
	background-color: var(--cl-light-opa);
	border-radius: 50%;
	border: none;
	width: 3rem;
	aspect-ratio: 1;
	margin-inline: 1rem;
}
.buttons_wrapper button:hover,
.buttons_wrapper button:focus {
	background-color: var(--cl-light);
	/* background-color: red; */
	border: 1px solid black;
}
</style>
