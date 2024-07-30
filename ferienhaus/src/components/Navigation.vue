<template>
	<div class="nav dflexrow">
		<button class="uppercase logo cl-text-light" @click="goHome">
			<span>der</span>bes<br />ondere<br /><span>urlaub</span>
		</button>
		<div class="nav__right dflexrow">
			<button class="mi-2rem uppercase btn--cta" @click="goBook">Buchen</button>

			<div class="menu">
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
										:to="{ path: `/house/${house.path}`, hash: '#hero' }"
										:key="`house-${house.id}`"
										class="sublink"
										@click="closeSub"
										>{{ house.name }}
									</RouterLink>
								</ul>
							</div>
						</li>

						<li role="menuitem">
							<RouterLink
								class="dropdown-link"
								:to="{ path: '/', hash: '#faq' }"
								@click="closeSub"
							>
								Häufige Fragen
							</RouterLink>
						</li>
						<li role="menuitem">
							<RouterLink class="dropdown-link" to="/" @click="closeSub">
								Home
							</RouterLink>
						</li>
						<!-- <li role="menuitem">
						<a class="dropdown-link" href="#figma"> Figma </a>
					</li> -->
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, RouterLink } from "vue-router";

const goHome = () => {
	router.push("/");
};

const goBook = () => {
	router.push({ path: "/", hash: "#book" });
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
const closeSub = () => {
	showSub.value = false;
	showMenu.value = false;
	console.log("closesub");
};
</script>

<style lang="css" scoped>
.nav {
	z-index: 100;
	width: 100%;
	backdrop-filter: blur(10px);
	position: fixed;

	padding-inline: 1rem;
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
	border-bottom: 1px solid rgba(255, 255, 255, 0.4);
	border-right: 1px solid rgba(255, 255, 255, 0.4);

	display: none;
	flex-direction: column;
	width: 100%;
	height: 90vh;
	position: absolute;
	z-index: 1;
	visibility: hidden;
	opacity: 0;
	transform: scale(0.97) translateX(50px) translateY(-10px);
	transition: 0.5s ease-in-out;
	border-bottom-right-radius: 50px;
	background-image: linear-gradient(
		to bottom,
		var(--cl-bg-nav),
		var(--cl-dark-accent)
	);
}
@keyframes fade-in {
	100% {
		opacity: 1;
		display: block;
		visibility: visible;
	}
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
	display: block;
	visibility: visible;
	opacity: 1;
	transform: scale(1) translateX(0) translateY(0);
	left: 0;
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

.dropdown-link.router-link-active,
.sublink.router-link-active {
	color: goldenrod;
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
	background-color: transparent;

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
/* <!-- :to="{ path: `/house/${house.path}`, hash: '#hero' }" --> */

.btn--cta {
	align-self: center;
}
.btn--cta a {
	color: var(--cl-dark-accent);
}

.btn--cta:hover a,
.btn--cta:focus a {
	color: white;
}
</style>
