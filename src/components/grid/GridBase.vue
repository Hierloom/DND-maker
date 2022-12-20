<template>
	<div class="grid" :style="gridSettings">
		<slot></slot>
	</div>
</template>
<script lang="ts" setup>
	import { computed } from 'vue';

	const props = defineProps({
		gap: {
			type: Number,
			default: 1.5,
		},
		columns: {
			type: Number,
			default: 12,
		},
		rows: {
			type: Number,
			default: 1,
		},
	});

	const gridSettings = computed(() => {
		console.log(props.rows);
		return {
			'--gap': `${props.gap}rem`,
			'--columns': `${props.columns}`,
			'--rows': `${props.rows}`,
		};
	});
</script>
<style lang="scss">
	.grid {
		display: grid;
		gap: var(--gap);
	}
</style>
