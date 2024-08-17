<template>
	<Transition name="gallery">
		<div
			class="modal modal-container"
			v-show="modalOpen"
			@keyup.esc="closeLightbox"
		>
			<button class="btn--close-modal" @click="closeLightbox" ref="close">
				&times;
			</button>
			<slot></slot>
		</div>
	</Transition>
	<div class="overlay" v-show="modalOpen"></div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
const close = ref(null);
/* const close = ref(null);

const focusButton = () => {
	if (close.value) {
		close.value.focus();
		console.log(close.value);
	}
};
onMounted(() => focusButton()); */
/* onMounted(() => {
	console.log(close.value);
	close.value.focus();
}); */
/* nextTick(function () {
	console.log(close.value);
	close.value.focus();
	console.log("tick");
}); */
onMounted(() => {
	// console.log("mount Modal");
	// console.log(close.value);
});
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
	/* position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90vw;
	height: 90vh; */
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: var(--cl-bg-nav);
	color: var(--cl-light);
	padding: 5rem;
	overflow: hidden;
	display: flex;
	transition: all 0.4s ease;
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

.gallery-enter-active,
.gallery-leave-active {
	transition: opacity 2s ease;
	/* scale: 1; */
}

.gallery-enter-from,
.gallery-leave-to {
	opacity: 0;
}
</style>
