<script lang="ts" setup>
import { storeToRefs } from 'pinia'
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

console.log(classes.value)
</script>
<template>
    <div v-for="rpgClass in classes" :key="rpgClass.class.name">
        {{ rpgClass.class.name }}
        <div v-for="subClass in rpgClass.subclass">{{ subClass.name }}</div>
    </div>
</template>
