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
import LineChart from "@/components/Charts/LineChart.vue";

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

    <SectionMain>

      <SectionTitleLineWithButton
          :icon="mdiChartTimelineVariant"
          title="Overview"
          main
        >
          <BaseButton
            href="https://github.com/justboil/admin-one-vue-tailwind"
            target="_blank"
            :icon="mdiGithub"
            label="Star on GitHub"
            color="contrast"
            rounded-full
            small
          />

        </SectionTitleLineWithButton>
        
    </SectionMain>

  </div>
</template>