
<script setup>
import { useStyleStore } from "@/stores/style.js";
import { darkModeKey, styleKey } from "@/configs/config";
import { useMainStore } from "@/stores/main.js";
import "@/assets/css/main.css";


const mainStore = useMainStore();
const styleStore = useStyleStore();

/* App style */

// styleStore.setStyle(localStorage[styleKey] ?? "basic");
// styleStore.setDarkMode(true);

onMounted(() => {
  
  if (
  (!localStorage[darkModeKey] &&
    window.matchMedia("(prefers-color-scheme: dark)").matches) ||
  localStorage[darkModeKey] === "1"
) {
  styleStore.setDarkMode();
}

}),
/* Dark mode */



useHead({
  titleTemplate: (titleChunk) => {
    const titleBase = "Zen Nuxt ";

    return titleChunk ? `${titleChunk} - ${titleBase}` : titleBase;
  },
});



// const currentStyle =
//   typeof localStorage !== "undefined" && localStorage[styleKey]
//     ? localStorage[styleKey]
//     : "basic";

// styleStore.setStyle(currentStyle);

// const currentStoredDarkMode =
//   typeof localStorage !== "undefined" && localStorage[darkModeKey] === "1";

// if (
//   (!currentStoredDarkMode &&
//     typeof window !== "undefined" &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches) ||
//   currentStoredDarkMode
// ) {
//   styleStore.setDarkMode(true);
// }
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>