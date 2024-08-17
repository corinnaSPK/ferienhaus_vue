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
}
ul {
	font-size: 3rem;
}
ul li {
	margin-bottom: 2rem;
}
</style>
