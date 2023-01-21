import { defineStore } from 'pinia';
import { ref } from 'vue';
import { SystemData } from '../models/SystemData';

export const useSystemStore = defineStore('SystemStore', () => {
    const settings = ref<SystemData | null>(null);
    const classes = ref<any[]>([]);

    async function loadSystemData() {
        settings.value = await import('../plugins/rpgSystems/dnd5e/settings.json');

        const importedClasses = await import('../plugins/rpgSystems/dnd5e/classes/wizard.json');
        console.log(importedClasses);
        classes.value.push(importedClasses.default);
    }

    async function initatePluginData() {
        await loadSystemData();
        if (settings.value == null) {
            throw new Error('Failed loading system data');
        }
    }

    return { settings, classes, initatePluginData }
});