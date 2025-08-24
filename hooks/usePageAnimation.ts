"use client"

import { useEffect, useState } from "react"

// Hook that controls if page animations should run (on each mount)
export function usePageAnimation(delay = 1000) {
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true)
    }, delay)

    return () => {
      clearTimeout(timer)
      setShouldAnimate(false)
    }
  }, [delay])

  return shouldAnimate
}