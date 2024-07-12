<template>
	<div class="accordion_panel mb-3rem bbottom">
		<div class="title mb-5em">
			<button class="fs-copy" @click="togglePanel" :aria-expanded="panelOpen">
				<slot name="title" />
				<span :class="{ spanopen: panelOpen }" aria-hidden="true"> </span>
			</button>
		</div>
		<div class="content" :class="{ open: panelOpen }">
			<slot name="content" />
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
const panelOpen = ref(false);
const togglePanel = () => {
	panelOpen.value = !panelOpen.value;
};
</script>

<style lang="css" scoped>
button {
	border: none;
	background-color: transparent;
	color: inherit;
	text-align: left;
}

.content.open {
	display: block;
}
.content {
	display: none;
	/* border-bottom: 1px solid white; */
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
	margin-left: 1rem;
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
