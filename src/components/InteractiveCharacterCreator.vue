<script lang="ts" setup>
	import GridBase from 'components/grid/GridBase.vue';
	import GridCol from 'components/grid/GridCol.vue';
	import DescriptionCard from 'components/DescriptionCard.vue';
	import AccordionContainer from 'components/accordion/AccordionContainer.vue';
	import AccordionHeader from 'components/accordion/AccordionHeader.vue';
	import { computed, ref } from 'vue';
	import { BIconChevronLeft } from 'bootstrap-icons-vue';

	const data = ref<any>(null);
	await import('../JsonData/class/class-rogue.json').then((module) => {
		data.value = module.default;
	});

	const classData = data.value.class[0];

	const level = ref(20);

	console.log(classData);

	const hitDice = `${classData.hd.number}d${classData.hd.faces}`;
	const averageHitDice = classData.hd.faces / 2 + 1;

	const abilityScore = ref(0);

	const classFeatures = computed(() => {
		const features = data.value.classFeature;

		abilityScore.value = features.filter(
			(x: any) => x.name === 'Ability Score Improvement' && x.level < level.value
		).length;

		return features.filter((x: any) => x.name !== 'Ability Score Improvement' && x.level < level.value);
	});

	const subClassList = computed(() => {
		const subClasses = data.value.subclass;
		return subClasses;
	});

	const showImage = ref(true);

	function hideImage() {
		showImage.value = !showImage.value;
	}
</script>

<template>
	<div class="class-container">
		<div :class="['background-image', { shrink: showImage }]">
			<button
				:class="['btn btn-secondary dnd-hide-image-button', { 'dnd-active': showImage }]"
				@click="hideImage()"
			>
				<BIconChevronLeft class="fs-4" />
			</button>
		</div>
		<GridBase :class="['dnd-class-info', { expand: showImage }]" :columns="12" :rows="12">
			<GridCol style="grid-row: 1 / span 1; grid-column: 1 / span 6">
				<DescriptionCard class="text-white h-100">
					<h2>{{ classData.name }}</h2>
					<section>
						<div class="d-flex justify-content-between gap-4">
							<div>
								<h2 class="h4">Level</h2>
								<input v-model="level" type="number" min="1" max="20" class="mb-3" />
							</div>
							<div>
								<h2 class="h4">Ability score</h2>
								<h3>{{ abilityScore }}</h3>
							</div>
						</div>
						<div class="d-flex flex-wrap gap-2">
							<button v-for="subClass in subClassList" class="dnd-sub-class-badge">
								{{ subClass.shortName }}
							</button>
						</div>
					</section>
				</DescriptionCard>
			</GridCol>
			<GridCol style="grid-row: 2 / span 3; grid-column: 1 / span 6">
				<AccordionContainer>
					<DescriptionCard class="text-white h-100">
						<AccordionHeader tag="DescriptionCard">
							<template #accordion-header="{ toggle }">
								<button
									class="dnd-dropdown bg-dark text-white fs-4 fw-semibold border-bottom border-secondary"
									@click="toggle()"
								>
									Hit Points
								</button>
							</template>
							<template #accordion-body>
								<ul class="p-3">
									<li>Hit Dice: {{ hitDice }}</li>
									<li>Hit Points at 1st Level: 8 + your Constitution modifier</li>
									<li>
										Hit Points at Higher Levels: {{ hitDice }} (or {{ averageHitDice }}) + your
										Constitution modifier per {{ classData.name }} level after 1st
									</li>
								</ul>
							</template>
						</AccordionHeader>
						<AccordionHeader tag="DescriptionCard">
							<template #accordion-header="{ toggle }">
								<button
									class="dnd-dropdown bg-dark text-white fs-4 fw-semibold border-bottom border-secondary"
									@click="toggle()"
								>
									Proficiencies
								</button>
							</template>
							<template #accordion-body>
								<ul class="p-3">
									<li>
										Armor:
										<a v-for="armor in classData.startingProficiencies.armor">{{ armor }}</a>
									</li>
									<li>
										Weapons:
										<a v-for="weapon in classData.startingProficiencies.weapons">{{
											weapon + ','
										}}</a>
									</li>
									<li>
										Hit Points at Higher Levels: {{ hitDice }} (or {{ averageHitDice }}) + your
										Constitution modifier per {{ classData.name }} level after 1st
									</li>
								</ul>
							</template>
						</AccordionHeader>
					</DescriptionCard>
				</AccordionContainer>
			</GridCol>
			<GridCol style="grid-row: 7 / span 3; grid-column: 1 / span 6">
				<DescriptionCard class="text-white h-100">
					<h2>More stuff</h2>
					<section>Stuff!</section>
				</DescriptionCard>
			</GridCol>
			<GridCol style="grid-row: 1 / span 12; grid-column: 7 / span 6">
				<DescriptionCard class="dnd-feature-list text-white">
					<h2 class="text-white h-100">Class Features</h2>
					<section>
						<AccordionContainer v-for="feature in classFeatures">
							<AccordionHeader tag="DescriptionCard" :title="feature.name">
								<template #accordion-body>
									<div v-for="entry in feature.entries">
										<template v-if="typeof entry === 'object' && entry.type === 'list'">
											<ul v-for="item in entry.items">
												<li>{{ item }}</li>
											</ul>
										</template>
										<span v-else>{{ entry }}</span>
									</div>
								</template>
							</AccordionHeader>
						</AccordionContainer>
					</section>
				</DescriptionCard>
			</GridCol>
		</GridBase>
	</div>
</template>

<style lang="scss">
	.class-container {
		display: flex;
		height: 100%;
		gap: 2rem;
		padding: 1rem;
	}

	.background-image {
		background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/rogue4.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		transition: width 1s ease;
		position: relative;
		max-height: 100%;
		min-height: 100%;
		width: 50%;

		&.shrink {
			width: 25%;
		}
	}

	.dnd-class-info {
		grid-auto-columns: 1fr;
		grid-auto-rows: 1fr;
		height: 100%;
		max-height: 100%;
		transition: width 1s ease;
		width: 50%;

		&.expand {
			width: 75%;
		}
	}

	.dnd-feature-list {
		overflow: auto;
		max-height: 100%;
	}

	.dnd-hide-image-button {
		position: absolute;
		top: 20px;
		right: -16px;
		padding: 4px;
		transform: rotate(0deg);
		transition: all 1s ease;

		&.dnd-active {
			transform: rotate(180deg);
			transition: all 1s ease;
		}
	}

	.dnd-sub-class-badge {
		border-radius: 5px;
		background-color: transparent;
		font-size: 10px;
		color: var(--bs-gray-400);
		border: 1px solid var(--bs-gray-400);
	}

	.dnd-dropdown {
		text-align: left;
		padding: 8px 0;
		width: 100%;
		border: none;
	}
</style>
