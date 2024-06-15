<template>
	<div>
		<div v-for="house in houses" key="`house-${house.id}`">
			<p>{{ house.name }}</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import housesData from "../../data/houses.json";
const houses = ref(housesData);
</script>

<style lang="css" scoped></style>
