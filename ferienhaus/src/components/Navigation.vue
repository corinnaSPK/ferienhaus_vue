<template>
	<div class="nav dflexrow">
		<div class="menu">
			<button
				aria-controls="nav-main"
				aria-haspopup="true"
				:aria-expanded="showMenu"
				aria-label="browse"
				@click="toggleNav"
				class="mobile-nav-toggle"
				data-mobile-nav-toggle
				ref="toggleMenu"
			>
				<div class="menu-box open">
					<span class="a" :class="{ close: showMenu }"></span>
					<span class="b" :class="{ close: showMenu }"></span>
					<span class="c" :class="{ close: showMenu }"></span>
				</div>
			</button>
			<Transition name="fade"
				><div class="nav-main dropdown" v-show="showMenu">
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

							<Transition name="bottom"
								><div class="submenu" v-show="showSub">
									<ul>
										<RouterLink
											v-for="house in houses"
											:to="`/house/${house.path}`"
											:key="`house-${house.id}`"
											class="sublink"
											@click="closeNav"
											>{{ house.name }}
										</RouterLink>
									</ul>
								</div></Transition
							>
						</li>
						<li role="menuitem">
							<RouterLink class="dropdown-link" to="/kids" @click="closeNav">
								Für die kleinen Gäste
							</RouterLink>
						</li>
						<li role="menuitem">
							<RouterLink class="dropdown-link" to="/dogs" @click="closeNav">
								Urlaub mit Hund
							</RouterLink>
						</li>
						<li role="menuitem">
							<RouterLink
								class="dropdown-link"
								to="/umgebung"
								@click="closeNav"
							>
								Umgebung
							</RouterLink>
						</li>
						<li role="menuitem">
							<RouterLink
								class="dropdown-link"
								:to="{ path: '/', hash: '#faq' }"
								@click="closeNav"
							>
								Häufige Fragen
							</RouterLink>
						</li>
						<li role="menuitem">
							<RouterLink class="dropdown-link" to="/" @click="closeNav">
								Heimathafen
							</RouterLink>
						</li>
						<li role="menuitem">
							<RouterLink class="dropdown-link" to="/" @click="closeNav">
								nav = 85px height
							</RouterLink>
						</li>
					</ul>
				</div></Transition
			>
		</div>
		<button class="uppercase logo cl-text-light" @click="goHome">
			<div><span>der</span>bes<br />ondere<br /><span>urlaub</span></div>
		</button>
		<button class="uppercase btn--cta" @click="goBooking">buchen</button>
		<!-- <div class="nav-right dflexrow"></div> -->
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, RouterLink } from "vue-router";

const goHome = () => {
	router.push("/");
};
const goBooking = () => {
	router.push({ path: "/", hash: "#book" });
};
// toggle menu and sub vars
const showMenu = ref(false);
const showSub = ref(false);

// routing vars

const router = useRouter();
import housesData from "../data/houses.json";
const houses = ref(housesData);

// toggle menu and sub foos

// öffnet und schließt nav
const toggleNav = (e) => {
	showMenu.value = !showMenu.value;
};

// öffnet und schließt sub
const toggleSub = () => {
	showSub.value = !showSub.value;
};

const closeNav = () => {
	showMenu.value = false;
	showSub.value = false;
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
	padding: 1rem;
	/* backdrop-filter: blur(50px); */
	position: fixed;
	/* height: 50px; */
	background-color: var(--cl-bg-nav);
	/* background-color: rgba(16, 9, 43, 0.03); */
	justify-content: space-between;
}
.nav > * {
	/* margin-block: auto; */
}

/* open triangle for submenu */
.nav-button .spanopen {
	rotate: 225deg;
	translate: 1rem -50%;
	transition: all 1s ease;
}
/* Dropdown styles */
.dropdown {
	/* border-bottom: 1px solid rgba(255, 255, 255, 0.4); */
	/* border-left: 1px solid rgba(255, 255, 255, 0.4); */
	/* display: none; */
	flex-direction: column;
	width: 95%;
	height: 85vh;
	right: 0;
	position: absolute;
	z-index: 1;

	display: block;
	visibility: visible;
	/* transform: scale(0.97) translateX(50px) translateY(-10px); */
	/* transition: 0.8s ease-in-out; */
	/* border-bottom-left-radius: 50px; */

	background-image: linear-gradient(
		to bottom,
		var(--cl-bg-nav),
		var(--cl-dark-accent)
	);
}
.submenu {
	/* display: none; */
	width: 95%;

	z-index: 1;
	/* visibility: hidden; */
	/* opacity: 0; */
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

.dropdown ul li {
	border-bottom: 1px solid transparent;
	width: clamp(250px, 50%, 90%);
	padding-bottom: 0.3em;
}
/* Link styles */
.nav-link {
	font-weight: 500;
	padding: 0.3rem;
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

.submenu a {
	border-bottom: 1px solid transparent;
	width: fit-content;
}

.menu a:hover,
.nav-button:hover {
	border-bottom: 1px solid white;
}

.nav a,
.nav-button {
	color: rgba(255, 255, 255, 0.563);
}
.nav .router-link-active {
	color: white;
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

.btn--cta {
	align-self: center;
	/* justify-self: end; */
	/* margin-right: 4rem; */
}
.btn--cta a {
	color: var(--cl-dark-accent);
}

.btn--cta:hover a,
.btn--cta:focus a {
	color: white;
}
</style>
