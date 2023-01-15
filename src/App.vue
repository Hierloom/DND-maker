<script setup lang="ts">
	import DescriptionCard from './components/DescriptionCard.vue';
</script>

<template>
	<div class="app-container">
		<DescriptionCard>
			<nav class="navbar">
				<h1 class="">DND</h1>
				<div class="links">
					<router-link :to="{ name: 'create-character' }" class="link">Create character</router-link>
					<router-link :to="{ name: 'interactive-character-creator' }" class="link">Classes</router-link>
				</div>
			</nav>
		</DescriptionCard>
		<main class="main">
			<router-view></router-view>
		</main>
	</div>
</template>

<style lang="scss">
	$navbarHeight: 50px;
	.app-container {
		height: 100%;
	}

	.navbar {
		height: $navbarHeight;
		max-height: $navbarHeight;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.links {
		display: flex;

		& > .link {
			margin-right: 1rem;
		}
	}

	.main {
		height: calc(100% - $navbarHeight);
		max-height: calc(100% - $navbarHeight);
	}
</style>
