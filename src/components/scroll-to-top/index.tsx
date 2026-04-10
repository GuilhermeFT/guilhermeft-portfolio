'use client'

import { useEffect, useState } from 'react'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      style={{
        background: 'var(--color-overlay-dark-30)',
        transitionTimingFunction: 'linear',
      }}
      className={`fixed bottom-[14px] z-30 flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full transition-[right,opacity] duration-[400ms] hover:bg-darkest ${
        visible ? 'right-[14px] opacity-100' : '-right-[46px] opacity-0'
      }`}
    >
      {/* Arrow up icon */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M10 15V5M10 5L5 10M10 5L15 10"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
