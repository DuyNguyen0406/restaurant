'use client'

import { useEffect, useState } from 'react'

export function useCSSVariable(varName: string) {
  const [value, setValue] = useState<string | null>(null)

  useEffect(() => {
    const getCSSVariable = () => {
      const rootStyles = getComputedStyle(document.documentElement)
      setValue(rootStyles.getPropertyValue(varName) ?? null)
    }

    getCSSVariable()

    const observer = new MutationObserver(() => {
      getCSSVariable()
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style'],
    })

    return () => {
      observer.disconnect()
    }
  }, [varName])

  return value
}
