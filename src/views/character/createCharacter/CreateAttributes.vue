<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import CharacterAttribute from '../../../components/character/CharacterAttribute.vue'
import { DeterminationType } from '../../../models/SystemData'
import { useCreateCharacterStore } from '../../../store/CreateCharacterStore'

const characterCreation = useCreateCharacterStore()
const { character, systemData } = storeToRefs(characterCreation)

const selectedAttributeDeterminationType = ref<DeterminationType>()
</script>
<template>
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
            v-if="systemData != null"
            v-model="selectedAttributeDeterminationType"
            rounded="0"
            variant="outlined"
            group
            mandatory
        >
            <v-btn
                v-for="attributeDeterminationType in systemData.determinationTypes"
                :key="attributeDeterminationType.value"
                :value="attributeDeterminationType.value"
            >
                {{ attributeDeterminationType.label }}
            </v-btn>
        </v-btn-toggle>
    </v-col>
</template>
<style lang=""></style>
