<template>
    <button @click="$emit('click')" class="btn"><slot></slot></button>
</template>