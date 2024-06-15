<template>
	<div class="houses__intro mb-5rem talign-center mcenter">
		<h2 class="fs-head-2 fw-lighter mb-5em">Willkommen in Schönhagen</h2>

		<div class="intro__wrapper fs-copy">
			<div class=" ">
				<p class="houses__intro-copy fs-copy">
					Alle unsere Häuser sind modern und stilvoll eingerichtet, behalten
					jedoch stets ihren individuellen Charme. Die Häuser werden von uns
					laufend modernisiert und renoviert. Auch Ihre vierbeinigen Freunde
					können den Urlaub bei uns genießen. Alle Grundstück sind komplett
					eingezäunt und im Haus warten ein kuscheliges Hundebett sowie Wasser-
					und Futternapf.
				</p>
			</div>
		</div>
		<div class="intro__list fs-copy">
			<ul>
				<li class="mb-1em">
					<svg
						aria-hidden="true"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						height="16"
						width="14"
						viewBox="0 0 448 512"
					>
						<path
							d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
						/>
					</svg>
					<p>W-Lan und TV in allen Unterkünften</p>
				</li>
				<li class="mb-1em">
					<svg
						aria-hidden="true"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						height="16"
						width="14"
						viewBox="0 0 448 512"
					>
						<path
							d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
						/>
					</svg>
					<p>Alle Grundstücke eingezäunt</p>
				</li>
				<li class="mb-1em">
					<svg
						aria-hidden="true"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						height="16"
						width="14"
						viewBox="0 0 448 512"
					>
						<path
							d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
						/>
					</svg>
					<p>Sauna oder Infrarotkabine vorhanden (außer in Strandglück)</p>
				</li>
				<li class="mb-1em">
					<svg
						aria-hidden="true"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						height="16"
						width="14"
						viewBox="0 0 448 512"
					>
						<path
							d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
						/>
					</svg>
					<p>Alle Unterkünfte mit Kamin</p>
				</li>
				<li class="mb-1em">
					<svg
						aria-hidden="true"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						height="16"
						width="14"
						viewBox="0 0 448 512"
					>
						<path
							d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
						/>
					</svg>
					<p>Wäsche- und Handtuchpaket optional zubuchbar</p>
				</li>
				<li class="mb-1em">
					<svg
						aria-hidden="true"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						height="16"
						width="14"
						viewBox="0 0 448 512"
					>
						<path
							d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
						/>
					</svg>
					<p>Strand fußläufig erreichbar</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup></script>

<style lang="css" scoped>
.houses__intro {
	max-width: 60vw;
}
.houses svg {
	fill: white;
}
.intro__list {
	display: grid;
	place-content: center;
	padding: 2rem;
}
.intro__list svg {
	margin-right: 1rem;
}
.intro__wrapper {
	display: flex;
	gap: 5rem;
}
.intro__wrapper img {
	aspect-ratio: 1;
	border-radius: 50%;
	max-width: 300px;
}
.intro__wrapper > * {
	flex: 1;
	display: grid;
	place-content: center;
}
li p {
	display: inline;
}
@media (max-width: 65rem) {
	.intro__wrapper {
		flex-direction: column;
	}
}
.houses__wrapper {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 5rem;
}
</style>
