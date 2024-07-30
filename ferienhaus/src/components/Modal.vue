<template>
	<Transition name="gallery">
		<div class="modal modal-container" v-show="modalOpen">
			<button class="btn--close-modal" @click="closeLightbox" ref="close">
				&times;
			</button>
			<slot></slot>
		</div>
	</Transition>
	<div class="overlay" v-show="modalOpen"></div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
const close = ref(null);
/* const close = ref(null);

const focusButton = () => {
	if (close.value) {
		close.value.focus();
		console.log(close.value);
	}
};
onMounted(() => focusButton()); */
const { modalOpen } = defineProps(["modalOpen"]);
const emit = defineEmits(["close"]);
const closeLightbox = () => {
	emit("close");
};

console.log(modalOpen);
console.log(close.value);
const focusButton = () => {
	if (modalOpen) {
		close.value.focus();
		console.log(close.value);
	} else {
		console.log("wrong");
		console.log(close.value);
	}
};
/* onMounted(() => {
	focusButton();
	console.log("moun");
}); */
nextTick(() => {
	focusButton();
});
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
	transition: opacity 5s ease;
	/* scale: 1; */
}

.gallery-enter-from,
.gallery-leave-to {
	opacity: 0;
}
</style>
