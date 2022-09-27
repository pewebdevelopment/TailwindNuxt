<script setup>
import { computed, ref, onMounted } from "vue";
import { useMainStore } from "@/stores/main.js";
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie,
} from "@mdi/js";
import * as chartConfig from "@/components/Charts/chart.config.js";

const chartData = ref(null);
const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData();
};
onMounted(() => {
  fillChartData();
});
const mainStore = useMainStore();
const clientBarItems = computed(() => mainStore.clients.slice(0, 4));
const transactionBarItems = computed(() => mainStore.history);
</script>

<template>
  <div>
    <NuxtLayout name=""> This is the dashboard </NuxtLayout>
  </div>
</template>