<template>
    <GridBase class="p-3">
        <GridCol class="g-col-8">
            <GridBase :gap="0.5">
                <CardBase v-for="ability, key in character.data.abilities" :key="key" class="g-col-2 text-center">
                    <CardBody class="d-flex flex-column">
                        <CardTitle class="small">{{ $t(`characterSheet.abilities.${key}`) }}</CardTitle>
                        <span class="h4">{{ getModifier(ability.value) }}</span>
                        <input type="number" class="text-center" v-model="ability.value" />
                    </CardBody>
                </CardBase>
                <CardBase class="g-col-4">
                    <CardList flush>
                        <CardListItem
                            v-for="ability, key in character.data.skills"
                            :key="key"
                            class="d-flex gap-3 py-1 justify-content-between align-items-center"
                        >
                            <DropdownMenu :id="`skill-${key}`">
                                <template v-slot:activator="props">
                                    <ButtonBase v-bind="props" class="small">
                                        <BIconCheck v-if="ability.value === ProficiencyLevels.proficient" />
                                        <BIconCircle v-if="ability.value === ProficiencyLevels.notProficient" />
                                        <BIconCheckAll v-if="ability.value === ProficiencyLevels.expertise" />
                                        <BIconCircleHalf v-if="ability.value === ProficiencyLevels.halfProficient" />
                                    </ButtonBase>
                                </template>
                                <DropdownListItem
                                    type="button"
                                    v-for="proficiency, key in ProficiencyLevels" :key="proficiency"
                                    @click="ability.value = proficiency"
                                >
                                    <BIconCheck v-if="proficiency === ProficiencyLevels.proficient" />
                                    <BIconCircle v-if="proficiency === ProficiencyLevels.notProficient" />
                                    <BIconCheckAll v-if="proficiency === ProficiencyLevels.expertise" />
                                    <BIconCircleHalf v-if="proficiency === ProficiencyLevels.halfProficient" />
                                    {{ key }}
                                </DropdownListItem>
                            </DropdownMenu>
                            <span>{{ ability.value }}</span>
                            <span class="small flex-grow-1">{{ $t(`characterSheet.skills.${key}`) }}</span>
                            <span>{{ '(' + ability.ability + ')' }}</span>
                        </CardListItem>
                    </CardList>
                </CardBase>
                <GridCol class="g-col-4">
                    <GridBase :gap="0.5">
                        <CardBase class="g-col-4">
                            <CardBody class="d-flex flex-column">
                                <CardTitle class="small">{{ $t(`characterSheet.armorClass`) }}</CardTitle>
                                <span class="h4">{{ character.data.attributes.ac.formula }}</span>
                            </CardBody>
                        </CardBase>
                        <CardBase class="g-col-4">
                            <CardBody class="d-flex flex-column">
                                <CardTitle class="small">{{ $t(`characterSheet.initiative`) }}</CardTitle>
                                <span class="h4">{{ character.data.attributes.init.value }}</span>
                            </CardBody>
                        </CardBase>
                        <CardBase class="g-col-4">
                            <CardBody class="d-flex flex-column">
                                <CardTitle class="small">{{ $t(`characterSheet.speed`) }}</CardTitle>
                                <span class="h4">{{ character.data.attributes.movement.walk }}</span>
                            </CardBody>
                        </CardBase>
                        <CardBase class="g-col-12">
                            <CardBody class="d-flex flex-column">
                                <CardTitle class="small hstack">
                                    <span class="small">{{ $t(`characterSheet.maxHitPoints`) }}</span>
                                    <input v-model="character.data.attributes.hp.max" class="p-2 ms-auto" />
                                    <button class="btn">reset</button>
                                </CardTitle>
                                <span class="h4">{{ character.data.attributes.hp.value }}</span>
                            </CardBody>
                        </CardBase>
                        <CardBase class="g-col-12">
                            <CardBody class="d-flex flex-column">
                                <CardTitle class="small">{{ $t(`characterSheet.hp`) }}</CardTitle>
                                <span class="h4">{{ character.data.attributes.hp.max }}</span>
                            </CardBody>
                        </CardBase>
                    </GridBase>
                </GridCol>
            </GridBase>
        </GridCol>
        <GridCol class="g-col-4">
            <ChartBase
                type="radar"
                :data="data"
                :options="chartOptions"
                @init="initChart"
            ></ChartBase>
        </GridCol>
    </GridBase>
</template>
<script lang="ts" setup>
import CardBase from '@/components/card/CardBase.vue';
import GridBase from '@/components/grid/GridBase.vue';
import GridCol from '@/components/grid/GridCol.vue';
import CardTitle from '@/components/card/CardTitle.vue';
import CardBody from '@/components/card/CardBody.vue';
import ChartBase from '@/components/ChartBase.vue';
import CardList from '@/components/card/CardList.vue';
import CardListItem from '@/components/card/CardListItem.vue';

import type { Chart, ChartOptions } from 'chart.js';
import { customPropertyToRBG } from '@/composables/ColorHelper';
import CharacterData from '@/JsonData/character.json';
import { ProficiencyLevel, type CharacterSheet } from './Types/CharacterSheet';
import { computed, reactive, watch } from 'vue';
import ButtonBase from '@/components/button/ButtonBase.vue';
import DropdownMenu from '@/components/dropdown/DropdownMenu.vue';
import DropdownListItem from '@/components/dropdown/DropdownListItem.vue';
import { BIconCheck, BIconCheckAll, BIconCircle, BIconCircleHalf } from 'bootstrap-icons-vue';
import { calcAbilityModifier } from '@/composables/CharacterSheetFunctions';
    const Attributes = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
    const character: CharacterSheet = reactive(JSON.parse(JSON.stringify(CharacterData)));
    console.log(character);
    const ProficiencyLevels = {
        notProficient: ProficiencyLevel.NotProficient,
        halfProficient: ProficiencyLevel.HalfProficient,
        proficient: ProficiencyLevel.Proficient,
        expertise: ProficiencyLevel.Expertise
    };
    let chartInstance: Chart | null = null;

    function initChart(event: Chart) {
        chartInstance = event;
    }

    watch(character.data.abilities, (first, second) => {
        if (chartInstance == null) return; 
        chartInstance.data.datasets.forEach(x => {
            x.data = Object.values(first).map(x => x.value)
        })
        chartInstance.update();
    });

    function getModifier(score: number) {
        return calcAbilityModifier(score);
    }

    const data = computed(() => {
        return {
            labels: Attributes,
            datasets: [{
                label: 'Attributes',
                data: [
                    character.data.abilities.str.value,
                    character.data.abilities.dex.value,
                    character.data.abilities.con.value,
                    character.data.abilities.int.value,
                    character.data.abilities.wis.value,
                    character.data.abilities.cha.value
                ],
                backgroundColor: [
                    customPropertyToRBG('--bs-primary-rgb', 0.5),
                ],
                pointBackgroundColor: customPropertyToRBG('--bs-primary-rgb', 1),
                pointBorderColor: '#fff',
                borderColor: [customPropertyToRBG('--bs-primary-rgb', 1)],
                borderWidth: 1
            },
            ]
        }
    });

    const chartOptions: ChartOptions = {
        scales: {
            r: {
                min: 0,
                max: 20
            }
        }
    }
</script>