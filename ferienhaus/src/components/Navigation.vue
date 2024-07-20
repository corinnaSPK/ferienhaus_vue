<template>
	<div class="nav dflexrow">
		<div class="menu">
			<!-- 	<button
				class="nav-link dropdown-btn mi-2rem"
				aria-haspopup="true"
				:aria-expanded="showMenu"
				aria-label="browse"
				@click="toggleNav"
			>
				Menu
			</button> -->
			<button
				aria-controls="nav-main"
				aria-haspopup="true"
				:aria-expanded="showMenu"
				aria-label="browse"
				@click="toggleNav"
				class="mobile-nav-toggle"
				data-mobile-nav-toggle
			>
				<div class="menu-box open">
					<span class="a" :class="{ close: showMenu }"></span>
					<span class="b" :class="{ close: showMenu }"></span>
					<span class="c" :class="{ close: showMenu }"></span>
				</div>
			</button>
			<div class="nav-main dropdown" :class="{ active: showMenu }">
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
							class="nav-button"
						>
							Unterkünfte
							<span :class="{ spanopen: showSub }"></span>
						</button>
						<div class="submenu" :class="{ active: showSub }">
							<ul>
								<RouterLink
									v-for="house in houses"
									:to="`/house/${house.path}`"
									:key="`house-${house.id}`"
									class="sublink"
									>{{ house.name }}
								</RouterLink>
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
		<button class="uppercase logo cl-text-light" @click="goHome">
			<span>der</span>bes<br />ondere<br /><span>urlaub</span>
		</button>
		<button class="mi-2rem">buchen</button>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, RouterLink } from "vue-router";

const goHome = () => {
	router.push("/");
};
// toggle menu and sub vars
const showMenu = ref(false);
const showSub = ref(false);

// routing vars

const router = useRouter();
import housesData from "../data/houses.json";
const houses = ref(housesData);

// console.log(houses.value);
// toggle menu and sub foos

const toggleNav = (e) => {
	showMenu.value = !showMenu.value;
};

const toggleSub = () => {
	showSub.value = !showSub.value;
};

// routing

// 									:to="`house/${house.path}`"
const navigateToHouse = () => {
	// router.push(`/house/${house.id}`);
	console.log(`${route.params.id}`);
};
</script>

<style lang="css" scoped>
.nav {
	z-index: 100;
	width: 100%;
	backdrop-filter: blur(10px);
	position: fixed;
	/* height: 50px; */
	background-color: var(--cl-bg-nav);

	justify-content: space-between;
	border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}
.nav > * {
	margin-block: auto;
}

.nav-link {
	font-weight: 500;
	padding: 0.3rem;
}
/* .menu div:not(.submenu) li:hover a:not(.sublink),
.nav-button:hover {
	border-bottom: 1.2px solid white;
	display: block;
}
 */
.submenu a {
	border-bottom: 1px solid transparent;
	width: fit-content;
}
/* .submenu a:hover {
	border-bottom: 1px solid white;
} */

.menu a:hover,
.nav-button:hover {
	border-bottom: 1px solid white;
}
.nav-button {
	font-size: inherit;
	color: inherit;
	background-color: transparent;
	border: none;
}
.nav-button span {
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

.nav-button .spanopen {
	rotate: 225deg;
	translate: 1rem -50%;
	transition: all 1s ease;
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
	border-bottom: 1px solid transparent;
	width: clamp(250px, 50%, 90%);
	padding-bottom: 0.3em;
}

/* open button */

.mobile-nav-toggle {
	background-color: transparent;
	border: none;
}
.menu-box {
	width: 40px;
	padding: 15px;
	aspect-ratio: 1;
	background-color: var(--cl-dark-accent);

	position: relative;

	margin: 10px;
}
.menu-box span {
	width: 55%;
	height: 1px;
	border-radius: 5px;
	background-color: #fff;
	display: block;
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
	transition: all 0.5s ease;
}
.a {
	top: 13px;
}

.b {
	top: 20px;
}

.c {
	top: 27px;
}

.close.a {
	top: 50%;
	left: 50%;
	transform: translate(-50%, 50%) rotate(45deg);
	transition: all 0.5s ease;
}

.close.b {
	top: 20px;
	transition: all 0.5s ease;
	opacity: 0;
	transition: all 0.5s ease;
}

.close.c {
	top: 50%;
	left: 50%;
	transition: all 0.5s ease;
	transform: translate(-50%, 50%) rotate(-45deg);
	transition: all 0.5s ease;
}

/* Logo  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
.logo {
	padding: 5px;
	font-size: clamp(1rem, 1.2rem, 1.4rem);
	background-color: transparent;
	border: 1px solid transparent;
	border-radius: 0;
	margin-block: 0.5rem;
}
.logo span {
	color: rgba(255, 255, 255, 0.6);
}

.logo:hover,
.logo:focus,
.logo:focus-visible {
	border: 1px solid white;
	cursor: pointer;
}
</style>
