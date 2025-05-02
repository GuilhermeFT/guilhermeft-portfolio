'use client'

import { ScrollIndicator } from '@/components/scroll-indicator'
import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'
import { useAnimationTimeline } from '@/hooks/animation-timeline'
import Link from 'next/link'

export const HeroSection = () => {
  const handleDownload = () => {
    window.open('/files/resume.pdf', '_blank')
  }

  const scope = useAnimationTimeline([
    [
      [
        'h1',
        { opacity: 1 },
        {
          duration: 1.2,
        },
      ],
      ['h1', { scale: [0.2, 1] }, { duration: 1.5, ease: 'circOut' }],
    ],
    [
      [
        'h6:first-of-type',
        { opacity: 1, y: [50, 0], scale: [1] },
        { duration: 0.8, delay: 0.2 },
      ],
      [
        'h6:last-of-type',
        { opacity: [0, 1], y: [-50, 0], scale: [1] },
        { duration: 0.8, delay: 0.25 },
      ],
    ],
    [
      'div > div',
      { opacity: 1 },
      {
        duration: 1.2,
      },
    ],
  ])

  return (
    <Section className="flex h-dvh" disableAnimation>
      <div className="relative container flex flex-col items-center justify-center">
        <div
          ref={scope}
          className="flex w-full flex-1 flex-col items-center justify-center gap-4 text-center"
        >
          <h6 className="gradient-text flex items-center gap-2 text-base uppercase opacity-0 md:text-lg">
            Olá, eu sou
          </h6>

          <h1 className="mb-4 flex items-center gap-2 text-5xl font-extralight tracking-widest opacity-0 md:text-7xl">
            Guilherme Trindade
          </h1>

          <h6 className="gradient-text mb-10 text-base uppercase opacity-0 md:text-lg">
            Software Developer
          </h6>

          <div className="grid w-full max-w-96 gap-4 opacity-0 sm:grid-cols-2">
            <Button
              size="lg"
              className="cursor-pointer"
              onClick={handleDownload}
            >
              Resume
            </Button>
            <Link href="/#all-projects">
              <Button size="lg" variant="outline" className="cursor-pointer">
                See Projects
              </Button>
            </Link>
          </div>
        </div>

        <ScrollIndicator />
      </div>
    </Section>
  )
}
