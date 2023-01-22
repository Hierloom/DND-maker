<script lang="ts" setup>
import { computed } from 'vue'
import Character, { Attribute } from '../../../models/Character'
import CharacterAttribute from '../../../components/character/CharacterAttribute.vue'

import CreateClass from './CreateClass.vue'
import CreateRace from './CreateRace.vue'
import CreateAttributes from './CreateAttributes.vue'
import CreateBackground from './CreateBackground.vue'
import CreateSpells from './CreateSpells.vue'
import CreateFeats from './CreateFeats.vue'
import CreateBio from './CreateBio.vue'
import { useCreateCharacterStore } from '../../../store/CreateCharacterStore'
import { storeToRefs } from 'pinia'

interface Step {
    id: string
    index: number
    title: string
    icon: string
    description: string
    component: any
}
const characterCreation = useCreateCharacterStore()
characterCreation.startCharacterCreation()
const { currentStep } = storeToRefs(characterCreation)
const steps = computed<Step[]>(() => [
    {
        id: 'class',
        index: 1,
        title: 'Class',
        icon: 'mdi-sword',
        description: 'Choose your destiny!',
        component: CreateClass,
    },
    {
        id: 'race',
        index: 2,
        title: 'Race',
        icon: 'mdi-heart',
        description: 'What kind are you!?',
        component: CreateRace,
    },
    {
        id: 'attributes',
        index: 3,
        title: 'Attributes',
        icon: 'mdi-dice-d20-outline',
        description: 'How strong are you?',
        component: CreateAttributes,
    },
    {
        id: 'background',
        index: 4,
        title: 'Background',
        icon: 'mdi-script-text-outline',
        description: 'From where do thou hail?',
        component: CreateBackground,
    },
    {
        id: 'spells',
        index: 5,
        title: 'Spells',
        icon: 'mdi-dice-d20-outline',
        description: 'How strong are you?',
        component: CreateSpells,
    },
    {
        id: 'feats',
        index: 6,
        title: 'Feats',
        icon: 'mdi-dice-d20-outline',
        description: 'How strong are you?',
        component: CreateFeats,
    },
    {
        id: 'bio',
        index: 7,
        title: 'bio',
        icon: 'mdi-script-text-outline',
        description: 'An adventurer is always prepared!',
        component: CreateBio,
    },
])
</script>

<template>
    <v-container class="d-flex flex-column h-100">
        <v-timeline
            direction="horizontal"
            side="start"
            class="flex-grow-0 flex-shrink-0"
        >
            <v-timeline-item
                v-for="step in steps"
                :key="step.id"
                size="large"
                :icon="step.icon"
                :dotColor="
                    currentStep > step.index
                        ? 'green-lighten-1'
                        : currentStep === step.index
                        ? 'purple-darken-1'
                        : 'grey-lighten-1'
                "
                fillDot
            >
                {{ step.title }}
                <!--         <template v-slot:opposite> {{ step.description }} </template> -->
            </v-timeline-item>
        </v-timeline>
        <v-window v-model="currentStep" class="step-container">
            <v-window-item
                v-for="step in steps"
                :key="step.id"
                :value="step.index"
            >
                <Suspense>
                    <Component :is="step.component"></Component>
                </Suspense>
            </v-window-item>
        </v-window>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn v-if="currentStep > 1" variant="text" @click="currentStep--">
                Back
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
                v-if="currentStep < steps.length"
                color="primary"
                variant="flat"
                @click="currentStep++"
            >
                Next
            </v-btn>
            <v-btn
                v-if="currentStep === steps.length"
                color="primary"
                variant="flat"
                @click="characterCreation.finishCharacterCreation"
            >
                Finish
            </v-btn>
        </v-card-actions>
    </v-container>
</template>
<style lang="scss" scoped>
.step-container {
    flex: 1 0;
}
</style>
