<script lang="ts" setup>
import { PropType } from 'vue'
import { Attribute } from '../../models/Character'
import { NCard, NInputNumber } from 'naive-ui'

const props = defineProps({
    attribute: {
        type: Object as PropType<Attribute>,
        required: true,
    },
})

function calculateModifier(value: number) {
    return Math.floor((value - 10) / 2)
}

function updateAttribute(newValue: string) {
    const newNumber = Number(newValue)
    props.attribute.modifier = calculateModifier(newNumber)
}
</script>

<template>
    <v-card :title="attribute.name" variant="outlined" class="text-center">
        <template v-slot:text>
            <span class="modifier">{{ attribute.modifier }}</span>
            <v-text-field
                v-model="attribute.value"
                style="width: 50px; margin: 0 auto"
                hide-details
                density="compact"
                variant="plain"
                @update:modelValue="updateAttribute"
                type="number"
            />
        </template>
    </v-card>
</template>

<style lang="scss">
.modifier {
    display: block;
    font-size: var(--font-size-lg);
    text-align: center;
}
</style>
