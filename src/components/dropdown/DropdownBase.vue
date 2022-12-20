<template>
    <slot
        name="trigger"
        :toggle="toggle"
        :show="show"
        :hide="hide"
    >
        <button class="btn btn-secondary dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
        </button>
    </slot>
    <ul ref="bsDropdown" class="dropdown-menu" :id="props.id" :aria-labelledby="props.id">
        <slot>
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </slot>
    </ul>
</template>
<script lang="ts" setup>
    import { ref, onMounted } from 'vue'
    import { Dropdown } from 'bootstrap'
    const bsDropdown = ref(null);
    let dropdown: Dropdown;

    const props = defineProps({
        id: {
            type: String,
            default: 'dropdownID'
        },
    })

    onMounted(() => {
        dropdown = new Dropdown(bsDropdown.value as unknown as Element);
    })

    function toggle() {
        dropdown.toggle();
    }

    function show() {
        dropdown.show();
    }

    function hide() {
        dropdown.hide();
    }
</script>