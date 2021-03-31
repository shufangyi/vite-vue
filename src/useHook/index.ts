import { getCurrentInstance, onUnmounted, Ref, ComputedRef } from 'vue'

export function tryOnUnmounted(fn: () => any) {
  if (getCurrentInstance()) onUnmounted(fn)
}

export function noop() {}

export type Fn = () => void

export type MaybeRef<T> = T | Ref<T> | ComputedRef<T>
