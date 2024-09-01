<template>
	<header class="hero mb1" id="mainhero">
		<!-- <div class="hero__box dgridcenter p-3">
			<div class="hero__box_text dgridcenter">
				<h1 class="fs-head-main ff-sansserif uppercase space-3 mb-5em">
					Der <br />besondere <br />
					Urlaub
				</h1>
				<p class="fs-copy mb-1em">
					Genießen Sie die schönste Zeit des Jahres in unseren exklusiven
					Unterkünften
				</p>
				<p class="fs-copy">
					<span
						><svg
							aria-hidden="true"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							height="16"
							width="16"
							viewBox="0 0 512 512"
						>
							<path
								d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 
								19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 
								150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 
								176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 
								339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
							></path>
						</svg>
					</span>
					abc@gmx.de
				</p>
				<p class="fs-copy">
					<span
						><svg
							aria-hidden="true"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							height="16"
							width="16"
							viewBox="0 0 512 512"
						>
							<path
								d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
							></path>
						</svg>
					</span>
					0175/123456789
				</p>
			</div>
		</div> -->
		<div class="grid">
			<div class="img__wrapper">
				<img src="../../assets/img/duenen_1.jpg" alt="" srcset="" />
			</div>
			<div class="grid_content">
				<h1 class="fs-head-main ff-sansserif uppercase space-3 mb-5em">
					Der <br />besondere <br />
					Urlaub
				</h1>
				<p class="fs-copy mb-1em">
					Genießen Sie die schönste Zeit des Jahres in unseren exklusiven
					Unterkünften
				</p>
				<p class="fs-copy">
					<span
						><svg
							aria-hidden="true"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							height="16"
							width="16"
							viewBox="0 0 512 512"
						>
							<path
								d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 
								19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 
								150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 
								176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 
								339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
							></path>
						</svg>
					</span>
					abc@gmx.de
				</p>
				<p class="fs-copy">
					<span
						><svg
							aria-hidden="true"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							height="16"
							width="16"
							viewBox="0 0 512 512"
						>
							<path
								d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
							></path>
						</svg>
					</span>
					0175/123456789
				</p>
			</div>
		</div>
	</header>
</template>

<script setup></script>

<style lang="css" scoped>
.hero {
	padding: 2rem;
	/* min-height: 90dvh; */
	/* background-color: yellow; */
}
.grid {
	/* background-color: red; */
	/* width: 100%; */
	max-width: 1200px;
	/* height: 100%; */
	height: 80vh;
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(10, 10dvh);
	margin-inline: auto;
}
.img__wrapper {
	grid-column: 1/8;
	grid-row: 1/8;
}
.img__wrapper img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: bottom;
	border: none;
}
.grid_content {
	grid-column: 2/-1;
	background-color: #ffffffc8;
	/* height: 60%; */
	padding: 2rem;
	align-self: center;
	color: var(--cl-dark-accent);
	grid-row: 2/9;
}
@media (min-width: 600px) {
	.hero {
		min-height: 80dvh;
	}
	.grid_content {
		padding: 7rem;
	}
}

.hero svg {
	fill: var(--cl-dark-accent);
}
.hero span {
	margin-right: 1.5rem;
}
.hero__box {
	min-height: 100vh;
	background-image: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url(../../assets/img/duenen_1.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: bottom;
}

.hero__box_text {
	padding: 2rem;
	color: var(--cl-dark-accent-opa);
	background-color: rgba(255, 255, 255, 0.8);
	border: 1px solid white;
}
.hero__box_text h1 {
	line-height: 1.2;
	font-weight: lighter;
}
.hero__box_text h1::after {
	content: "";
	display: block;
	width: 50%;
	height: 1px;
	background-color: var(--cl-dark-accent);
	margin-top: 10px;
}
.hero__box_text h3 {
	font-weight: lighter;
}
</style>
