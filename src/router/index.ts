import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'pages-generated'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

export function setupRouter(app: App) {
  app.use(router)
}
