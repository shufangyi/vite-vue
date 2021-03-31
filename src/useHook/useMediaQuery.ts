import { ref } from 'vue'
import { tryOnUnmounted } from '.'

export function useMediaQuery(query: string) {
  const mediaQuery = window.matchMedia(query)
  const matches = ref(mediaQuery.matches)

  const handler = (event: MediaQueryListEvent) => (matches.value = event.matches)

  mediaQuery.addEventListener('change', handler)

  tryOnUnmounted(() => {
    mediaQuery.removeEventListener('change', handler)
  })

  return matches
}
