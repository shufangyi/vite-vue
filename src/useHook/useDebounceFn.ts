export function useDebounceFn(fn: () => any, ms = 200) {
  return createFilterWrapper(debounceFilter(ms), fn)
}

export function createFilterWrapper(filter: any, fn: any) {
  function wrapper(bindthis: any, ...args: any[]) {
    filter(() => fn.apply(bindthis, args))
  }

  return wrapper
}

export const bypassFilter = (invoke: () => any) => {
  return invoke()
}

export function debounceFilter(ms: number) {
  if (ms <= 0) return bypassFilter

  let timer: number

  const filter = (action: any) => {
    if (timer) clearTimeout(timer)

    timer = setTimeout(action, ms)
  }

  return filter
}
