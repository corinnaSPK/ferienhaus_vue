<template>
	<div class="umgebung">
		<article class="hero text-center mcenter">
			<div class="hero__img__box">
				<img
					src="../assets/img/5-mk-hunde-fuer-alle-ist-gesorgt--.jpg"
					alt=""
				/>
			</div>
			<h1 class="fs-head-main">Urlaub mit Hund</h1>
		</article>
	</div>
	<section>
		<h2>Umgebung</h2>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolorum
			consequuntur veniam ullam debitis blanditiis labore, ducimus doloremque
			tempore distinctio! Possimus est vero ullam, repellat, veniam nobis
			accusantium et incidunt at dolorum quam optio quasi recusandae eius
			adipisci maiores modi sunt voluptatem. Illo quidem modi voluptate
			assumenda est. Doloremque ex, quibusdam sint beatae excepturi non
			voluptatibus! Eius voluptate aperiam alias beatae adipisci eos facilis
			cumque in! Rem nihil repudiandae atque? Quam quis blanditiis nam amet?
			Autem, praesentium. Doloribus asperiores sunt incidunt velit sapiente.
			Assumenda, laborum eveniet iusto alias unde ratione quod natus rerum,
			autem veritatis, culpa distinctio temporibus tempora adipisci.
		</p>
	</section>
</template>

<script setup></script>

<style lang="css" scoped>
.umgebung {
	pading-top: 85px;
}
.hero {
	/* max-width: 700px; */
	border: 3px solid whitesmoke;
	position: relative;
	background-image: linear-gradient(
		to left,
		var(--cl-light-accent),
		var(--cl-light-accent) 70%,
		var(--cl-dark-accent) 30%,
		var(--cl-dark-accent)
	);
	/* width: clamp(280px, 70%, 700px); */
	max-height: 70vh;
	/* min-height: 70vh; */
	overflow: hidden;
	position: relative;
}

h1 {
	position: absolute;
	bottom: 5%;
	left: 50%;
	/* transform: translateX(-50%); */
	/* background-color: var(--cl-dark-accent); */
	padding: 1rem 2rem;
}
section {
	padding: 10rem;
	min-height: 60vh;
}
.hero__img__box {
	/* padding-block: 3rem; */
	border: 4px solid yellowgreen;
	/* 	max-width: 100%;
	max-height: 70%; */
	/* position: relative;
	min-height: 100%; */
	/* display: grid;
	place-content: center; */
	/* max-height: 100%; */
	width: 70vw;
	max-height: 70%;
	margin-inline: auto;
	overflow: hidden;
}
.hero img {
	border: none;

	height: 100%;
	object-fit: cover;
	/* position: absolute; */
	/* top: 50%;
	left: 50%;
	transform: translate(-50%, -50%); */

	/* height: auto; */
	/* max-height: 100%; */
	/* max-width: 100%; */
}
</style>
