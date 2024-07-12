<template>
	<section class="faq dgridcenter p-3-in cl-text-light">
		<div class="accordion__content">
			<div class="accordion__wrapper fs-copy">
				<h2 class="fs-head-2 uppercase mb-5em">FAQ</h2>
				<p class="fs-copy mb-5em">
					Lorem ipsum, dolor Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Labore, sequi? sit amet consectetur adipisicing elit. Illum,
					inventore!
				</p>
			</div>
			<div class="faq__wrapper fs-copy">
				<AccPanel>
					<template v-slot:title>Gibt es Internet? <span></span></template>
					<template v-slot:content
						>Something small enough to escape casual notice.</template
					>
				</AccPanel>
				<AccPanel>
					<template v-slot:title
						>Muss ich eigene Bettwäsche mitbringen?<span></span
					></template>
					<template v-slot:content
						>Something small enough to escape casual notice.</template
					>
				</AccPanel>
				<AccPanel>
					<template v-slot:title>Was kostet die Sauna?<span></span></template>
					<template v-slot:content
						>Something small enough to escape casual notice.</template
					>
				</AccPanel>
				<AccPanel>
					<template v-slot:title
						>Wo kriege ich Holz für den Kamin her? <span></span
					></template>
					<template v-slot:content
						>Something small enough to escape casual notice.</template
					>
				</AccPanel>
			</div>
		</div>
	</section>
</template>

<script setup>
import AccPanel from "../AccPanel.vue";
</script>

<style lang="css" scoped>
.active {
	border: 5px solid red;
}
.accordion__content {
	width: clamp(90%, 70vw, 700px);
	display: flex;
	flex-direction: column;
	gap: 3rem;
	margin-inline: auto;
}
.accordion__content > * {
	/* width: 80vw; */
	margin-inline: auto;
}
.accordion .img__wrapper {
	display: grid;
	place-content: center;
	margin-inline: auto;
	width: 70%;
}

@media (min-width: 60rem) {
	.accordion__content {
		flex-direction: row;
	}
	.accordion__content > * {
		width: 50%;
	}
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
</style>
