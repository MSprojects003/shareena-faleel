import { useEffect, useRef, useState } from 'react'

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -24px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return {
    ref,
    className: isVisible ? 'scroll-reveal is-visible' : 'scroll-reveal',
  }
}
