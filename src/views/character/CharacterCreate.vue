<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import Character, { Attribute } from '../../models/Character'
import CharacterAttribute from '../../components/character/CharacterAttribute.vue'
import SystemData from '../../plugins/rpgSystems/dnd5e.json'

interface Step {
    id: string
    index: number
    title: string
    icon: string
    description: string
}

// Load system data from plugin
const character = new Character()
const attributeDeterminationTypes = SystemData.determinationTypes
character.attributes = reactive(SystemData.attributes)

const currentStep = ref<number>(0)
const steps = computed<Step[]>(() => [
    {
        id: 'general',
        index: 1,
        title: 'General',
        icon: 'mdi-heart',
        description: 'Start here',
    },
    {
        id: 'attributes',
        index: 2,
        title: 'Attributes',
        icon: 'mdi-dice-d20-outline',
        description: 'How strong are you?',
    },
    {
        id: 'class',
        index: 3,
        title: 'Class',
        icon: 'mdi-sword',
        description: 'Choose your destiny!',
    },
    {
        id: 'background',
        index: 4,
        title: 'Background',
        icon: 'mdi-script-text-outline',
        description: 'An adventurer is always prepared!',
    },
])

type attributeDeterminationTypes = 'point-buy' | 'roll' | 'standard-array'

function finishCharacterCreation() {
    console.log('finished')
}

const selectedAttributeDeterminationType =
    ref<attributeDeterminationTypes>('roll')
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
                :ket="step.id"
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
                <template v-slot:opposite> {{ step.description }} </template>
            </v-timeline-item>
        </v-timeline>
        <v-window v-model="currentStep" class="step-container">
            <v-window-item :value="1"> General </v-window-item>
            <v-window-item :value="2">
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
                        <p class="mb-4">
                            Choose how to decide attribute points
                        </p>

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
            </v-window-item>
            <v-window-item :value="3"> Class </v-window-item>
            <v-window-item :value="4"> Background </v-window-item>
        </v-window>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn v-if="currentStep > 1" variant="text" @click="currentStep--">
                Back
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
                v-if="currentStep < 4"
                color="primary"
                variant="flat"
                @click="currentStep++"
            >
                Next
            </v-btn>
            <v-btn
                v-if="currentStep === 4"
                color="primary"
                variant="flat"
                @click="finishCharacterCreation"
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
