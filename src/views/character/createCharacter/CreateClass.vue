<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { ClassData } from '../../../plugins/rpgSystems/dnd5e/types/classData'
import { useSystemStore } from '../../../store/SystemStore'

const props = defineProps({
    test: {
        type: String,
        default: '',
    },
})

const store = useSystemStore()
await store.initatePluginData()

const { settings, classes } = storeToRefs(store)

const selectedClass = ref<ClassData>()
console.log(classes.value)
</script>
<template>
    <v-container class="d-flex justify-center">
        <v-btn-toggle
            v-model="selectedClass"
            rounded="0"
            variant="outlined"
            group
            mandatory
        >
            <v-btn
                v-for="rpgClass in classes"
                :key="rpgClass.class.name"
                :value="rpgClass"
            >
                {{ rpgClass.class.name }}
            </v-btn>
        </v-btn-toggle>
    </v-container>
    <v-container v-if="selectedClass != null">
        <h2 class="text-h4">{{ selectedClass.class.name }}</h2>
        <v-divider />
        <div class="pa-6">
            <v-expansion-panels variant="accordion">
                <v-expansion-panel title="Starting equipment">
                    <v-expansion-panel-text>
                        <div
                            v-for="startingEquipment in selectedClass.class
                                .startingEquipment.default"
                        >
                            <span
                                v-for="(equipment, index) in startingEquipment"
                            >
                                <span v-show="index > 0"> or </span>
                                <span>{{ equipment }}</span>
                            </span>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel title="Starting Proficiencies">
                    <v-expansion-panel-text>
                        <div
                            v-for="startingProficiency in selectedClass.class
                                .startingProficiencies"
                        >
                            <span
                                v-for="(
                                    proficienct, index
                                ) in startingProficiency"
                            >
                                <span>{{ proficienct }}</span>
                            </span>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
    </v-container>
</template>
