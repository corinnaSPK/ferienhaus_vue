<template>
	<div class="modal" v-show="modalOpen">
		<button class="btn--close-modal" @click="closeLightbox">&times;</button>

		<slot></slot>
	</div>
	<div class="overlay" v-show="modalOpen"></div>
</template>

<script setup>
import { ref } from "vue";

const { modalOpen } = defineProps(["modalOpen"]);
const emit = defineEmits(["close"]);
const closeLightbox = () => {
	emit("close");
};

// in Parent ergänzen

/* const modalOpen = ref(false);
const openLightbox = (e) => {
	modalOpen.value = true;
};

const closeLightbox = () => {
	modalOpen.value = false;
}; */
</script>

<style lang="css" scoped>
.modal {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90vw;
	height: 90vh;
	background-color: var(--cl-bg-nav);
	color: var(--cl-light);
	padding: 5rem;
	z-index: 1000;
	overflow: hidden;
}

.overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	backdrop-filter: blur(4px);
	z-index: 100;
}

.btn--close-modal {
	font-family: inherit;
	color: inherit;
	position: absolute;
	top: 0.5rem;
	right: 2rem;
	font-size: 3rem;
	border: none;
	background: none;
}
</style>
