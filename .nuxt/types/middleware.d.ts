import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "D:/Code for Life/19. Tailwind Practice/TailwindNuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}