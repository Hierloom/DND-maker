<script lang="ts" setup>
	import { ref } from 'vue';

	const props = defineProps({
		id: {
			type: String,
			required: true,
		},
		tag: {
			type: String,
			default: 'div',
		},
		title: {
			type: String,
			default: 'Title',
		},
		open: {
			type: Boolean,
			default: false,
		},
	});
	const toggled = ref(false);

	function toggle() {
		toggled.value = !toggled.value;
	}
</script>

<template>
	<component :is="props.tag" class="accordion-header" :id="props.id">
		<slot name="accordion-header" :toggle="toggle">
			<button
				class="accordion-button"
				type="button"
				@click="toggle()"
				:aria-expanded="toggled"
				:aria-controls="props.id"
			>
				{{ props.title }}
			</button>
		</slot>
	</component>
	<Transition>
		<div :id="props.id" :class="['accordion-collapse collapse', { show: toggled }]" :aria-labelledby="props.id">
			<div :class="['accordion-body', { open: props.open }]">
				<slot name="accordion-body"></slot>
			</div>
		</div>
	</Transition>
</template>

<style lang="scss">
	.accordion-button {
		width: 100%;
		text-align: left;
		padding: var(--padding-2);
		background-color: transparent;
		border: none;
		border-bottom: 1px solid;
	}
	.accordion-collapse {
		display: none;

		&.show {
			display: block;
		}
	}

	.accordion-body {
		padding: var(--padding-2);
	}
</style>
