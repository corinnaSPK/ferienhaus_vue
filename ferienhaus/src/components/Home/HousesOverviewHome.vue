<template>
	<section class="houses mb1" id="houses">
		<HousesIntroHome></HousesIntroHome>
		<HousesWrapperHome></HousesWrapperHome>
	</section>
</template>

<script setup>
import HousesIntroHome from "@/components/Home/HousesIntroHome.vue";
import HousesWrapperHome from "@/components/Home/HousesWrapperHome.vue";
</script>

<style lang="css" scoped>
.houses {
	margin-top: 0;
	padding-top: 0;
}
</style>
