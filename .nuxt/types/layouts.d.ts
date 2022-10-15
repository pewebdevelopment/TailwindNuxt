import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "zen"
declare module "D:/Code for Life/19. Tailwind Practice/TailwindNuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}