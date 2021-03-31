import { useMediaQuery } from './useMediaQuery'

export function useBreakpoints<K extends string>(breakpoints: Record<K, number | string>) {
  function getValue(k: K): string {
    let v = breakpoints[k]
    if (typeof v === 'number') v = `${v}px`
    return v as string
  }

  return {
    greater(k: K) {
      return useMediaQuery(`(min-width: ${getValue(k)})`)
    },
    smaller(k: K) {
      return useMediaQuery(`(max-width: ${getValue(k)})`)
    },
    between(a: K, b: K) {
      return useMediaQuery(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b)})`)
    },
  }
}
