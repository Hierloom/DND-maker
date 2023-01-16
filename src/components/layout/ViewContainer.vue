<script lang="ts" setup>
import { NEl } from 'naive-ui';

const props = defineProps({
    tag: {
        type: String,
        default: 'div',
    },
});
</script>
<template>
    <n-el :tag="props.tag" class="container">
        <slot></slot>
    </n-el>
</template>
<style lang="scss" scoped>
.container {
    max-width: 1280px;

    &.centered {
        margin: 0 auto;
    }
}
</style>
