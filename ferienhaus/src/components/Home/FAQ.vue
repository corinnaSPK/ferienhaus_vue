<template>
	<section
		class="faq dgridcenter p-3-in cl-background-gradient cl-text-light"
		id="faq"
	>
		<div class="accordion__content">
			<div class="accordion__wrapper fs-copy">
				<h2 class="fs-head-2 mb-5em ff-serif">Häufige Fragen</h2>
				<p class="fs-copy mb-5em">
					Lorem ipsum, dolor Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Labore, sequi? sit amet consectetur adipisicing elit. Illum,
					inventore!
				</p>
			</div>
			<div class="faq__wrapper fs-copy">
				<AccPanel>
					<template v-slot:title><p>Gibt es Internet?</p></template>
					<template v-slot:content
						><div id="faq-1">Lorem ipsum dolor sit.</div></template
					>
				</AccPanel>
				<AccPanel>
					<template v-slot:title
						>Muss ich eigene Bettwäsche mitbringen</template
					>
					<template v-slot:content
						><div id="faq-2">Lorem ipsum dolor sit.</div>
						.</template
					>
				</AccPanel>
				<AccPanel>
					<template v-slot:title>Was kostet die Sauna?</template>
					<template v-slot:content
						><div id="faq-3">Lorem ipsum dolor sit.</div></template
					>
				</AccPanel>
				<AccPanel>
					<template v-slot:title
						>Wo kriege ich Holz für den Kamin her?
					</template>
					<template v-slot:content
						><div id="faq-4">Lorem ipsum dolor sit.</div></template
					>
				</AccPanel>
			</div>
		</div>
	</section>
</template>

<script setup>
import AccPanel from "../AccPanel.vue";
const { panelOpen } = defineProps(["panelOpen"]);
</script>

<style lang="css" scoped>
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
</style>
