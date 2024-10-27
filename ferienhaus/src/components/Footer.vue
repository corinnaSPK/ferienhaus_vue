<template>
	<div class="footer">
		<h3>this is the lovely footer</h3>

		<ul>
			<li><RouterLink to="/impressum">Impressum</RouterLink></li>
			<li><RouterLink to="/datenschutz">Datenschutz</RouterLink></li>
		</ul>
	</div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="css" scoped>
.footer {
	background-color: var(--cl-dark-footer);
	padding: 2rem;
	border-top: 1px solid rgb(46, 46, 46);
}
ul {
	font-size: 3rem;
}
ul li {
	margin-bottom: 2rem;
}
a {
	font-size: 2rem;
	border-bottom: 1px solid transparent;
	padding-bottom: 4px;
}
a:hover,
a:focus {
	border-bottom: 1px solid var(--cl-light-opa);
}
</style>
