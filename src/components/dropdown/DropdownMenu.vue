<template>
<div :class="[position]">
    <slot
        name="activator"
        class="dropdown-toggle"
        :data--bs--toggle="'dropdown'"
        :aria--expanded="false"
        :id="id"
    >
        <button
            class="btn btn-secondary dropdown-toggle"
            :id="props.id"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            Dropdown button
        </button>
    </slot>
    <ul ref="bsDropdown" class="dropdown-menu" :aria-labelledby="props.id">
    <slot></slot>
  </ul>
</div>
</template>
<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { Dropdown } from 'bootstrap'
import { stringifyQuery } from 'vue-router';
import { computed } from '@vue/reactivity';
    const bsDropdown = ref(null);
    let dropdown: Dropdown;

    const props = defineProps({
        id: {
            type: String,
            default: 'dropdownID'
        },
        right: {
            type: Boolean,
            default: false,
        },
        up: {
            type: Boolean,
            default: false,
        },
        left: {
            type: Boolean,
            default: false,
        }
    })

    const position = computed(() => {
        if (props.up) {
            return 'dropup';
        }
        if (props.left) {
            return 'dropstart';
        }
        if (props.right) {
            return 'dropend';
        }
        return 'dropdown';
    })

    onMounted(() => {
        dropdown = new Dropdown(bsDropdown.value as unknown as Element);
    })
</script>