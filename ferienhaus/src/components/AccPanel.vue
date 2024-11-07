<template>
	<div class="accordion__panel mb-3rem bbottom">
		<div class="title mb-5em">
			<button
				class="fs-copy dflexrow"
				@click="togglePanel"
				:aria-expanded="panelOpen"
				aria-controls="content"
			>
				<slot name="title" />
				<span :class="{ spanopen: panelOpen }" aria-hidden="true"> </span>
			</button>
		</div>
		<Transition name="fade">
			<div class="content" v-show="panelOpen">
				<slot name="content" />
			</div>
		</Transition>
	</div>
</template>

<script setup>
// https://medium.com/notonlycss/how-to-build-an-accordion-component-in-vue-js-570ee594404c
import { customRef, ref } from "vue";
const panelOpen = ref(false);
const togglePanel = () => {
	panelOpen.value = !panelOpen.value;
};
</script>

<style lang="css" scoped>
.accordion__panel {
	font-weight: 200;
}
button {
	/* display: block; */
	width: 100%;
	border: none;
	background-color: transparent;
	color: inherit;
	text-align: left;
	font-weight: 200;
	justify-content: space-between;
}
button:hover {
	cursor: pointer;
}

.title {
	display: flex;
	justify-content: space-between;
}

span {
	display: inline-block;
	width: 1rem;
	height: 1rem;
	aspect-ratio: 1;
	border-right: 1px solid var(--cl-light);
	border-bottom: 1px solid var(--cl-light);
	margin-right: 2rem;
	rotate: 45deg;

	transform: translateY(-50%);
	transition: all 1s ease;
}
.spanopen {
	rotate: 225deg;
	translate: 1rem -50%;
	transition: all 1s ease;
}
</style>
