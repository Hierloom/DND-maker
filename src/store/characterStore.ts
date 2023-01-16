import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import Character from '../models/Character';
import { useStorage } from '@vueuse/core'

export const useCharacterStore = defineStore('character', () => {
    const characters = useStorage('vue-use-local-storage', ref<Character[]>([]))

    const getCharacterList = computed<Character[]>(() => characters.value)

    const getCharacterById = computed<(characterId: string) => Character | undefined>(() => {
        return (characterId: string) => characters.value.find((character) => character.id === characterId)
    })

    function deleteCharacter(characterId: string) {
        characters.value = characters.value.filter((character) => character.id !== characterId);
    }

    function addCharacter(character: Character) {
        characters.value.push(character);
    }

    return { getCharacterList, getCharacterById, deleteCharacter, addCharacter }
});