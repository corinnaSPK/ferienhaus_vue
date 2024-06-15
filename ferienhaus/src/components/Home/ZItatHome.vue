<template>
	<section class="zitat mb1">
		<div class="zitat__wrapper">
			<div class="zitat__text">
				<h2 class="fs-copy ff-sansserif uppercase space-3">
					Wie anziehend, wie fesselnd sind doch Meer und Strand! Wie verliert
					man sich in ihrer Einfachheit, ja, in ihrer Leere!
				</h2>
				<p class="fs-copy-small">Walt Whitman</p>
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style lang="css" scoped>
.zitat {
	padding-block: 0;
}
.zitat__wrapper {
	display: grid;
	grid-template-areas: "stack";
	letter-spacing: 1px;
}
.zitat__wrapper > * {
	grid-area: stack;
}

.zitat__wrapper .zitat__text {
	min-height: 90vh;
	padding: 3rem;
	padding-block: 7rem;
	color: var(--cl-dark-accent-opa);
	place-self: center;
	line-height: 1.3;
	text-align: center;
	display: grid;
	place-content: center;
	height: 100%;
	font-weight: 100;
	background-image: linear-gradient(
			to left,
			rgba(253, 249, 249, 0.513),
			rgba(251, 249, 249, 0.494)
		),
		url(../../../public/img/sunset-8485910_1280.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-attachment: fixed;
}
.zitat__wrapper h2 {
	width: clamp(150px, 400px, 75%);
	margin: 0 auto;
}
</style>
