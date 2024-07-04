<template>
	<div class="nav dflexrow">
		<div class="menu">
			<button
				class="nav-link dropdown-btn mi-2rem"
				aria-haspopup="true"
				:aria-expanded="showMenu"
				aria-label="browse"
				@click="toggleNav"
			>
				Menu
			</button>
			<div class="dropdown" :class="{ active: showMenu }">
				<ul role="menu" class="dgridcenter">
					<li role="menuitem">
						<a class="dropdown-link" href="#adobe-xd"> Home </a>
					</li>
					<li role="menuitem">
						<button
							aria-haspopup="true"
							:aria-expanded="showSub"
							aria-label="browse"
							@click="toggleSub"
						>
							UNterkünfte
						</button>
						<div class="submenu" :class="{ active: showSub }">
							<ul>
								<li>sub goes here</li>
								<li>sub goes here</li>
								<li>sub goes here</li>
							</ul>
						</div>
					</li>

					<li role="menuitem">
						<a class="dropdown-link" href="#sketch"> Häufige Fragen </a>
					</li>
					<li role="menuitem">
						<a class="dropdown-link" href="#indesign"> Umgebung </a>
					</li>
					<li role="menuitem">
						<a class="dropdown-link" href="#figma"> Figma </a>
					</li>
				</ul>
			</div>
		</div>
		<Logo></Logo>
		<button class="mi-2rem">buchen</button>
	</div>
</template>

<script setup>
import { ref } from "vue";
import Logo from "@/components/Logo.vue";
const showMenu = ref(false);

const showSub = ref(false);
const toggleNav = (e) => {
	showMenu.value = !showMenu.value;
};

const toggleSub = () => {
	showSub.value = !showSub.value;
};
</script>

<style lang="css" scoped>
.nav {
	z-index: 100;
	width: 100%;
	backdrop-filter: blur(10px);
	position: fixed;
	height: 50px;
	background-color: var(--cl-bg-nav);

	justify-content: space-between;
}
.nav > * {
	margin-block: auto;
}

.nav-link {
	font-weight: 500;
	padding: 0.3rem;
}
.menu li:hover {
	color: teal;
	border-bottom: 1.2px solid white;
}

.dropdown {
	display: flex;
	flex-direction: column;
	width: 95%;
	height: 90vh;
	position: absolute;
	z-index: 1;
	visibility: hidden;
	opacity: 0;
	transform: scale(0.97) translateX(-50px) translateY(-10px);
	transition: 0.5s ease-in-out;
	border-bottom-right-radius: 50px;
	background-image: linear-gradient(
		to bottom,
		var(--cl-bg-nav),
		var(--cl-dark-accent)
	);
}
.submenu {
	display: none;
	width: 95%;

	z-index: 1;
	visibility: hidden;
	opacity: 0;
}
.dropdown ul {
	width: 90%;
	height: 90%;
	margin: auto;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 1.2rem;
	font-size: clamp(1.85rem, 1rem + 5vw, 2.4rem);
}

.dropdown.active {
	visibility: visible;
	opacity: 1;
	transform: scale(1) translateX(-0) translateY(0);
}
.submenu.active {
	display: block;
	visibility: visible;
	opacity: 1;
}

.dropdown ul li {
	border-bottom: 1px solid rgba(255, 255, 255, 0.666);
	width: clamp(250px, 50%, 90%);
	padding-bottom: 0.3em;
}
</style>
