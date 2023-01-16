<script lang="ts" setup>
import {
    StepsProps,
    NSpace,
    NSteps,
    NStep,
    NIcon,
    NRadioButton,
    NRadioGroup,
    NIconWrapper,
} from 'naive-ui';
import { ref, reactive } from 'vue';
import { DiceD20 } from '@vicons/fa';
import Character, { Attribute } from '../../models/Character';
import CharacterAttribute from '../../components/character/CharacterAttribute.vue';

const current = ref<number>(1);
const currentStatus = ref<StepsProps['status']>('process');
const character = new Character();

const attributes: Attribute[] = [
    {
        name: 'Strength',
        modifier: 0,
        value: 10,
    },
    {
        name: 'Dexterity',
        modifier: 0,
        value: 10,
    },
    {
        name: 'Constitution',
        modifier: 0,
        value: 10,
    },
    {
        name: 'Intelligence',
        modifier: 0,
        value: 10,
    },
    {
        name: 'Wisdom',
        modifier: 0,
        value: 10,
    },
    {
        name: 'Charisma',
        modifier: 0,
        value: 10,
    },
];

type attributeDeterminationTypes = 'point-buy' | 'roll' | 'standard-array';

const attributeDeterminationTypes = [
    {
        value: 'point-buy',
        label: 'Point buy',
    },
    {
        value: 'roll',
        label: 'Roll 4d6 and drop the lowest',
    },
    {
        value: 'standard-array',
        label: 'Standard Array',
    },
];

const selectedAttributeDeterminationType = ref<attributeDeterminationTypes>(
    'roll'
);

character.attributes = reactive(attributes);
</script>

<template>
    <v-timeline
        direction="horizontal"
        line-inset="12"
        side="start"
        size="small"
    >
        <v-timeline-item>
            General
            <template v-slot:opposite> Start here </template>
        </v-timeline-item>
        <v-timeline-item>
            Attributes
            <template v-slot:opposite> How strong are you? </template>
        </v-timeline-item>
        <v-timeline-item>
            Class
            <template v-slot:opposite> Choose your destiny! </template>
        </v-timeline-item>
        <v-timeline-item>
            Background
            <template v-slot:opposite>
                An adventurer is always prepared!
            </template>
        </v-timeline-item>
    </v-timeline>
    <section>
        <v-container>
            <v-row>
                <v-col
                    v-for="attribute in character.attributes"
                    :key="attribute.name"
                >
                    <CharacterAttribute :attribute="attribute" />
                </v-col>
            </v-row>
        </v-container>
        <v-col>
            <p class="mb-4">Choose how to decide attribute points</p>

            <v-btn-toggle
                v-model="selectedAttributeDeterminationType"
                rounded="0"
                variant="outlined"
                group
                mandatory
            >
                <v-btn
                    v-for="attributeDeterminationType in attributeDeterminationTypes"
                    :key="attributeDeterminationType.value"
                    :value="attributeDeterminationType.value"
                >
                    {{ attributeDeterminationType.label }}
                </v-btn>
            </v-btn-toggle>
        </v-col>
    </section>
</template>
<style>
.step-container {
    padding: var(--padding-2);
}
</style>
