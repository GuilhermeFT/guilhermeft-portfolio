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
    [['h5', { opacity: 1, y: [20, 0] }, { duration: 0.8, delay: 0.2 }]],
    [
      ['h1', { opacity: 1 }, { duration: 1.2 }],
      ['h1', { scale: [0.2, 1] }, { duration: 1.5, ease: 'circOut' }],
    ],
    [['h3', { opacity: [0, 1], y: [20, 0] }, { duration: 0.8, delay: 0.2 }]],
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
          className="flex w-full flex-1 flex-col items-center justify-center gap-6 text-center"
        >
          <h5 className="opacity-0">Software Developer</h5>

          <h1 className="h1-large mb-2 opacity-0">Guilherme Trindade</h1>

          <h3 className="text-muted-foreground font-medium opacity-0">
            Construindo interfaces e experiências que fazem a diferença.
          </h3>

          <div className="mt-4 grid w-full max-w-sm gap-4 opacity-0 sm:grid-cols-2">
            <Button variant="pill" onClick={handleDownload}>
              Currículo
            </Button>
            <Link href="/#all-projects">
              <Button variant="pill-outline" className="w-full">
                Ver Projetos
              </Button>
            </Link>
          </div>
        </div>

        <ScrollIndicator />
      </div>
    </Section>
  )
}
