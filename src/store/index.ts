import { App } from 'vue'
import { createStore } from 'vuex'

export const store = createStore({})

export function setupStore(app: App) {
  app.use(store)
}
