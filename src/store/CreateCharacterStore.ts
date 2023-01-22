import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import Character from '../models/Character';
import { SystemData } from '../models/SystemData';

export const useCreateCharacterStore = defineStore('CreateCharacter', () => {
    const character = ref<Character>(new Character());
    const currentStep = ref<number>(0)
    let systemData = ref<SystemData | null>(null);

    async function loadSystemData() {
        systemData.value = await import('../plugins/rpgSystems/dnd5e/settings.json');
    }

    async function startCharacterCreation() {
        await loadSystemData();
        if (systemData.value == null) {
            throw new Error('Failed loading system data');
        }
        character.value.attributes = reactive(systemData.value.attributes)
    }

    function finishCharacterCreation() {
        console.log('finished')
    }

    return { character, currentStep, systemData, startCharacterCreation, finishCharacterCreation }
});