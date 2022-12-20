<template>
    <DropdownBase id="nav-id">
        <template #trigger="{ toggle }">
            <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                aria-expanded="false"
                @click="toggle()"
            >
                {{ props.title }}
            </a>
        </template>
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
    </DropdownBase>
</template>
<script lang="ts" setup>
import DropdownBase from './DropdownBase.vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Title'
    },
    options: {
        type: Array,
        default: () => []
    }
})

</script>
