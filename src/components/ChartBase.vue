<template>
    <!-- <canvas ref="chartContainer" id="myChart"></canvas> -->
</template>
<script lang="ts" setup>
/* import Chart, { type ChartOptions, type ChartData, type ChartConfiguration, type ChartTypeRegistry } from 'chart.js/auto';
import { ref, onMounted, computed, watch } from 'vue';
    const chartContainer = ref(null);
    let chart: Chart;
    const emit = defineEmits(['init'])

    const props = defineProps({
        type: {
            type: String,
            default: 'bar'
        },
        data: {
            type: Object,
            default: null
        },
        options: {
            type: Object,
            default: null
        },
    })

    Chart.defaults.elements.bar

    const options = computed(() => {
        const options: ChartConfiguration = {
            type: props.type as keyof ChartTypeRegistry,
            data: props.data as ChartData,
            options: props.options as ChartOptions
        }
        return options
    })

    onMounted(() => {
        const ctx = (chartContainer.value as unknown)
        chart = new Chart(ctx as HTMLCanvasElement, options.value);
        emit('init', chart)
    }) */
</script>
