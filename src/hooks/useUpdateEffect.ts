import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

/**
 * Equivalent to useEffect, but won't get executed on mount
 *
 */
export function useUpdateEffect(
  effectCb: EffectCallback,
  deps: DependencyList = []
): void {
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (!isInitialMount.current) return effectCb()

    /* eslint-disable-next-line fp/no-mutation */
    isInitialMount.current = false
  }, deps)
}
