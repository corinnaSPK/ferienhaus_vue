<template>
	<div>
		<button @click="togglePanel">click</button>
		<div class="content" :class="{ open: panelOpen }">tesxt goes heres</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
const panelOpen = ref(false);
const togglePanel = () => {
	panelOpen.value = !panelOpen.value;

	console.log(panelOpen.value);
};
</script>

<style lang="css" scoped>
div.open {
	display: none;
}
</style>
