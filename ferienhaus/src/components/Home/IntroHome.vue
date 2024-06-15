<template>
	<section class="intro dgridcenter p-3-in mb1" id="about">
		<div class="text__box mb-5rem">
			<h2 class="intro__box-head fs-head-2 fw-lighter mb-5em">
				Urlaubsreif? Hier beginnt Ihr Traumurlaub!
			</h2>
			<p class="intro__box-copy fs-copy">
				Erleben und genießen Sie die schönsten Tage des Jahres in einem unserer
				gemütlichund komfortabelausgestatteten Häuser. Bewusst sind die Häuser
				im skandinavischen Stil gehalten, nicht nur das Äußere, sondern auch im
				Innern wird Sie alles an Urlaub erinnern. Die Häuser sind auf der
				Halbinsel Schwansen, direkt an der schönen Ostsee gelegen, welche fast
				vor der Haustür beginnt und mit seiner einzigartigen Natur begeistert.
				Vor allem die großen Vogelkolonien faszinieren jeden Naturliebhaber.
				Aber auch die gesunde, staubfreie Luft lässt manchen Großstädter
				durchatmen. Ganz zu schweigen von der himmlischen Ruhe und der
				Gelassenheit der hiesigen Bewohner, die auch Sie in kurzer Zeit
				anstecken wird. Schauen Sie sich die Häuser in aller Ruhe an und
				entscheiden Sie sich für eines, welches in Ihrem Urlaub zu Ihrem Zuhause
				wird.
			</p>
		</div>
		<div class="photo__box mb-5rem">
			<ul class="flexwrap">
				<li class="">
					<img
						src="../../../public/img/bs-die-finische-fasssauna.jpg"
						alt="Foto Fasssauna"
						srcset=""
					/>
				</li>
				<li class="">
					<img
						src="../../../public/img/k-img-0169_640_0.jpg"
						alt="Foto Strandkorb"
						srcset=""
					/>
				</li>

				<li class="">
					<img
						src="../../../public/img/kue-wiga_c2000_2000.jpg"
						alt="Foto Wintergarten"
						srcset=""
					/>
				</li>
				<li class="">
					<img
						src="../../../public/img/kamin_mg_quer.jpg"
						alt="Foto Kamin"
						srcset=""
					/>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup></script>

<style lang="css" scoped>
.intro {
	padding-bottom: 0;
}

.text__box {
	max-width: clamp(300px, 60%, 700px);
	margin: 0 auto 5rem;
}

.photo__box {
	position: relative;
}
.photo__box::after {
	content: "";
	display: block;
	position: absolute;
	width: 90%;
	height: 90%;
	background-color: var(--cl-dark-hover);
	top: 0;
	z-index: -5;
}

.flexwrap {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1rem;
}

.flexwrap > * {
	flex: 0 1 clamp(100px, 20%, 300px);

	margin: 0 auto;
}
.photo__box img {
	aspect-ratio: 1;
}
</style>
