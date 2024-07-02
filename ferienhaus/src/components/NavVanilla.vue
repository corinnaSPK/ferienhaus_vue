<template>
	<header id="nav-menu" aria-label="navigation bar" ref="header">
		<div class="container">
			<div class="nav-start">
				<a class="logo" href="/">
					<img
						src="https://github.com/Evavic44/responsive-navbar-with-dropdown/blob/main/assets/images/logo.png?raw=true"
						width="35"
						height="35"
						alt="Inc Logo"
					/>
				</a>
				<nav class="menu">
					<ul class="menu-bar">
						<li>
							<button
								class="nav-link dropdown-btn"
								data-dropdown="dropdown1"
								aria-haspopup="true"
								:aria-expanded="showMenu"
								aria-label="browse"
								@click="clickMe"
								ref="dropdownbutton1"
							>
								Browse
								<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
							</button>
							<div
								id="dropdown1"
								class="dropdown"
								:class="{ active: showMenu }"
							>
								<ul role="menu">
									<li role="menuitem">
										<a class="dropdown-link" href="#best-of-the-day">
											<img
												src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/botd.svg"
												class="icon"
											/>
											<div>
												<span class="dropdown-link-title">Best of the day</span>
												<p>Shorts featured today by curators</p>
											</div>
										</a>
									</li>
									<li role="menuitem">
										<a class="dropdown-link" href="#featured-streams">
											<img
												src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/fs.svg"
												class="icon"
											/>
											<div>
												<span class="dropdown-link-title"
													>Featured Streams</span
												>
												<p>Leading creatives livestreams</p>
											</div>
										</a>
									</li>
									<li role="menuitem">
										<a class="dropdown-link" href="#subscriptions">
											<img
												src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/sp.svg"
												class="icon"
											/>
											<div>
												<span class="dropdown-link-title">Subscriptions</span>
												<p>Gain exclusive access</p>
											</div>
										</a>
									</li>
									<li role="menuitem">
										<a class="dropdown-link" href="#creative-feed">
											<img
												src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/cf.svg"
												class="icon"
											/>
											<div>
												<span class="dropdown-link-title">Creative Feed</span>
												<p>See trending creations</p>
											</div>
										</a>
									</li>
								</ul>

								<ul role="menu">
									<li class="dropdown-title">
										<span class="dropdown-link-title">Browse by apps</span>
									</li>
									<li role="menuitem">
										<a class="dropdown-link" href="#adobe-xd">
											<img
												src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/xd.svg"
											/>
											Adobe XD
										</a>
									</li>
									<li role="menuitem">
										<a class="dropdown-link" href="#after-effect">
											<img
												src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/ae.svg"
											/>
											After Effect
										</a>
									</li>
									<li role="menuitem">
										<a class="dropdown-link" href="#sketch">
											<img
												src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/sketch.svg"
											/>
											Sketch
										</a>
									</li>
									<li role="menuitem">
										<a class="dropdown-link" href="#indesign">
											<img
												src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/indesign.svg"
											/>
											Indesign
										</a>
									</li>
									<li role="menuitem">
										<a class="dropdown-link" href="#figma">
											<img
												src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/figma.svg"
											/>
											Figma
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<button
								class="nav-link dropdown-btn"
								data-dropdown="dropdown2"
								aria-haspopup="true"
								aria-expanded="false"
								aria-label="discover"
								ref="dropdownbutton2"
							>
								Discover
								<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
							</button>
							<div id="dropdown2" class="dropdown">
								<ul role="menu">
									<li>
										<span class="dropdown-link-title">Browse Categories</span>
									</li>
									<li role="menuitem">
										<a class="dropdown-link" href="#branding">Branding</a>
									</li>
									<li role="menuitem">
										<a class="dropdown-link" href="#illustrations"
											>Illustration</a
										>
									</li>
								</ul>
								<ul role="menu">
									<li>
										<span class="dropdown-link-title">Download App</span>
									</li>
									<li role="menuitem">
										<a class="dropdown-link" href="#mac-windows"
											>MacOS & Windows</a
										>
									</li>
									<li role="menuitem">
										<a class="dropdown-link" href="#linux">Linux</a>
									</li>
								</ul>
							</div>
						</li>
						<!-- <li><a class="nav-link" href="/">Jobs</a></li> -->
						<!-- <li><a class="nav-link" href="/">Livestream</a></li> -->
						<!-- <li><a class="nav-link" href="/">About</a></li> -->
					</ul>
				</nav>
			</div>

			<div class="nav-end">
				<!-- <div class="right-container">
					<form class="search" role="search">
						<input type="search" name="search" placeholder="Search" />
						<i class="bx bx-search" aria-hidden="true"></i>
					</form>
					<a href="#profile">
						<img
							src="https://github.com/Evavic44/responsive-navbar-with-dropdown/blob/main/assets/images/user.jpg?raw=true"
							width="30"
							height="30"
							alt="user image"
						/>
					</a>
					<button class="btn btn-primary">Create</button>
				</div> -->

				<button
					id="hamburger"
					aria-label="hamburger"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<i class="fa-solid fa-bars" aria-hidden="true"></i>
				</button>
			</div>
		</div>
	</header>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
const dropdownbutton1 = ref(null);
const dropdownbutton2 = ref(null);
// !dder hack ist, alle queryselector all per computed zu generieren über manuell zugewiesene template refs
const header = ref(null);
onMounted(() => {
	const dropdownbuttons = computed(() => {
		return [dropdownbutton1.value, dropdownbutton2.value];
	});

	console.log(dropdownbuttons.value);
	function setAriaExpandedFalse() {
		dropdownbuttons.value.forEach((btn) =>
			// btn.setAttribute("aria-expanded", "false")
			console.log("computed")
		);
	}
	setAriaExpandedFalse();
});
const showMenu = ref(false);
const clickMe = (e) => {
	console.log("clicked");
	showMenu.value = !showMenu.value;
	console.log(showMenu.value);
};
</script>

<style scoped>
.btn {
	display: block;
	background-color: teal;
	color: white;
	text-align: center;
	padding: 0.6rem 1.4rem;
	font-size: 1rem;
	font-weight: 500;
	border-radius: 5px;
}

.icon {
	padding: 0.5rem;
	background-color: rgb(41, 41, 34);
	border-radius: 10px;
}

.logo {
	margin-right: 1.5rem;
}

#nav-menu {
	border-bottom: 1px solid red;
}

.container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1600px;
	margin: 0 auto;
	column-gap: 2rem;
	height: 90px;
	padding: 1.2rem 3rem;
}

.menu {
	position: relative;
	background: white;
}

.menu-bar li:first-child .dropdown {
	flex-direction: initial;
	min-width: 480px;
}

.menu-bar li:first-child ul:nth-child(1) {
	border-right: 1px solid red;
}

.menu-bar li:nth-child(n + 2) ul:nth-child(1) {
	border-bottom: 1px solid red;
}

.menu-bar .dropdown-link-title {
	font-weight: 600;
}

.menu-bar .nav-link {
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: -0.6px;
	padding: 0.3rem;
	min-width: 60px;
	margin: 0 0.6rem;
}

.menu-bar .nav-link:hover,
.dropdown-link:hover {
	color: teal;
}

.nav-start,
.nav-end,
.menu-bar,
.right-container,
.right-container .search {
	display: flex;
	align-items: center;
}

.dropdown {
	display: flex;
	flex-direction: column;
	min-width: 230px;
	background-color: white;
	border-radius: 10px;
	position: absolute;
	top: 36px;
	z-index: 1;
	visibility: hidden;
	opacity: 0;
	transform: scale(0.97) translateX(-5px);
	transition: 0.1s ease-in-out;
}

.dropdown.active {
	visibility: visible;
	opacity: 1;
	transform: scale(1) translateX(5px);
}

.dropdown ul {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 1.2rem;
	font-size: 0.95rem;
}

.dropdown-btn {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.15rem;
}

.dropdown-link {
	display: flex;
	gap: 0.5rem;
	padding: 0.5rem 0;
	border-radius: 7px;
	transition: 0.1s ease-in-out;
}

.dropdown-link p {
	font-size: 0.8rem;
	color: var(--medium-grey);
}

@media (max-width: 1100px) {
	#hamburger {
		display: block;
		position: relative;
		left: calc(100vw - 9rem);
	}

	.container {
		padding: 1.2rem;
		margin-right: 3rem;
	}

	.menu {
		display: none;
		position: absolute;
		top: 87px;
		left: 0;
		min-height: 100vh;
		width: 100vw;
	}

	.menu-bar li:first-child ul:nth-child(1) {
		border-right: none;
		border-bottom: var(--border);
	}

	.dropdown {
		display: none;
		min-width: 100%;
		border: none !important;
		border-radius: 5px;
		position: static;
		top: 0;
		left: 0;
		visibility: visible;
		opacity: 1;
		transform: none;
		box-shadow: none;
	}

	.menu.show,
	.dropdown.active {
		display: block;
	}

	.dropdown ul {
		padding-left: 0.3rem;
	}

	.menu-bar {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		row-gap: 1rem;
		padding: 1rem;
	}

	.menu-bar .nav-link {
		display: flex;
		justify-content: space-between;
		width: 100%;
		font-weight: 600;
		font-size: 1.2rem;
		margin: 0;
	}

	.menu-bar > li:not(:last-child) {
		padding-bottom: 0.5rem;
		border-bottom: var(--border);
	}
}

@media (max-width: 600px) {
	.right-container {
		display: none;
	}
}
#hamburger {
	display: none;
	padding: 0.1rem;
	margin-left: 1rem;
	font-size: 1.9rem;
}
</style>
