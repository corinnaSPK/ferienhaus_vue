<template>
	<div class="accordion_panel mb-3rem bbottom">
		<div class="title mb-5em">
			<button class="fs-copy" @click="togglePanel" :aria-expanded="panelOpen">
				<slot name="title" />
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
button span {
	background-color: red;
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
</style>
