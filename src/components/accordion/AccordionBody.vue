<template>
    <div :class="['accordion-body', { 'open': props.open }]">
        <slot name="accordion-body"></slot>
    </div>
</template>