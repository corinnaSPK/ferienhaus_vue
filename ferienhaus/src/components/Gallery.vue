<template>
	<section>
		<div class="gallery_wrapper">
			<ul class="thumbnail flexwrap">
				<li v-for="(img, index) in images" :key="img">
					<button @click="openLightbox">
						<img :src="`../src/assets/img/${img}`" alt="" :id="index" />
					</button>
				</li>
			</ul>
			<Modal :modalOpen="modalOpen" @close="closeLightbox">
				<div class="current_image mcenter">
					<img :src="`../src/assets/img/${images[currentImageIndex]}`" alt="" />
					<div class="buttons_wrapper">
						<button @click="prev">&larr;</button>
						<button @click="next">&rarr;</button>
					</div>
				</div>
			</Modal>
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
import Modal from "../components/Modal.vue";
import { ref } from "vue";
const { house } = defineProps(["house"]);
// momentan loopen wir durch ein array mit einfachen strings ["abc", "def", "etc"]; wir müssern aber statt der e3infachen strings ein objekt loopen, das muss im code noch angepasst werden
const images = house.imgintro;

const modalOpen = ref(false);

const currentImage = ref(null);
const currentImageIndex = ref(null);
const openLightbox = (e) => {
	modalOpen.value = true;
	currentImage.value = e.target.src;
	currentImageIndex.value = e.target.id;
	currentImageIndex.value = parseInt(currentImageIndex.value);
};

const closeLightbox = () => {
	modalOpen.value = false;
};

const prev = () => {
	if (currentImageIndex.value === 0) currentImageIndex.value = images.length;
	else {
		currentImageIndex.value = currentImageIndex.value - 1;
	}
};

const next = () => {
	if (currentImageIndex.value === images.length - 1) {
		currentImageIndex.value = 0;
	} else {
		currentImageIndex.value = currentImageIndex.value + 1;
	}
};
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

	border: 3px solid red;
}
.thumbnail img {
	width: 100%;
	aspect-ratio: 1;
	object-fit: cover;
}

.current_image {
	width: 100%;
	height: 100%;

	display: grid;
	align-items: center;
	grid-template-areas: "stack";
	overflow: hidden;
}

.current_image > * {
	grid-area: stack;
}

.current_image > img {
	max-height: 100%;
	max-width: 100%;
	object-fit: cover;
	object-position: center;
}

.buttons_wrapper {
	height: 50px;
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
}
</style>
