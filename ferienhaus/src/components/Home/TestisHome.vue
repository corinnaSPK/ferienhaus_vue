<template>
	<section class="testimonials cl-background-light">
		<svg aria-hidden="true" role="img" class="svg-top" viewBox="0 0 1440 320">
			<path
				fill="hsla(240, 52%, 10%)"
				fill-opacity="1"
				d="M0,96L80,101.3C160,107,320,117,480,144C640,171,800,213,960,224C1120,235,1280,213,1360,202.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
			></path>
		</svg>
		<div class="testimonials__wrapper p-3-in cl-text-dark-accent">
			<div class="testi testi-1">
				<h4 class="fs-head-4">Super Urlaub</h4>
				<p class="fs-copy">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
					omnis!
				</p>
				<p class="fs-small">Max M. aus Hamburg</p>
			</div>
			<div class="testi testi-2">
				<h4 class="fs-head-4">Super Urlaub</h4>
				<p class="fs-copy">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
					omnis!
				</p>
				<p class="fs-small">Max M. aus Hamburg</p>
			</div>
			<div class="testi testi-3">
				<h4 class="fs-head-4">Super Urlaub</h4>
				<p class="fs-copy">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
					omnis!
				</p>
				<p class="fs-small">Max M. aus Hamburg</p>
			</div>
		</div>
		<svg
			aria-hidden="true"
			role="img"
			class="svg-bottom"
			viewBox="0 0 1440 320"
		>
			<path
				fill="hsla(240, 52%, 10%)"
				fill-opacity="1"
				d="M0,96L80,101.3C160,107,320,117,480,144C640,171,800,213,960,224C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
			></path>
		</svg>
	</section>
</template>

<script setup></script>

<style lang="css" scoped>
.testimonials {
	padding-block: 10px;
}
.testimonials__wrapper {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1.5rem;
	padding-block: 15rem;
}

.testi {
	flex: 0 1 clamp(200px, 20%, 400px);
	padding: 1.5rem;
	background-color: white;
	position: relative;
}
.testi::after {
	content: "”";
	/* color: var(--cl-dark-accent-opa); */
	color: rgba(128, 128, 128, 0.305);
	position: absolute;
	top: -1rem;
	left: 0;
	font-size: 20rem;
}
.svg-top {
	margin-top: -20px;
}
.svg-bottom {
	margin-bottom: -30px;
}
</style>
