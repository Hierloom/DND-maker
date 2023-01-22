import { defineStore } from 'pinia';
import { ref } from 'vue';
import { SystemData } from '../models/SystemData';
import { ClassData } from '../plugins/rpgSystems/dnd5e/types/classData';

export const useSystemStore = defineStore('SystemStore', () => {
    const settings = ref<SystemData | null>(null);
    const classes = ref<ClassData[]>([]);

    async function loadSystemData() {
        settings.value = await import('../plugins/rpgSystems/dnd5e/settings.json');

        const importedClasses: ClassData = (await import('../plugins/rpgSystems/dnd5e/classes/wizard.json')).default;
        classes.value.push(importedClasses);
    }

    async function initatePluginData() {
        await loadSystemData();
        if (settings.value == null) {
            throw new Error('Failed loading system data');
        }
    }

    return { settings, classes, initatePluginData }
});