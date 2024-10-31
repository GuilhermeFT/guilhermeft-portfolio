import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/card'
import { MouseIcon } from '@/components/icons/mouse-icon'
import { PageTitle } from '@/components/page-title'
import { companies } from '@/utils/const'
import { ScrollFade } from '@/components/scroll-fade'
import { ScrollToButton } from '@/components/scroll-to-button'
import { getHighlightedProjects } from '@/services/projects'
import { AnimatedLogo } from '@/components/logo'

export default async function Home() {
  const projects = await getHighlightedProjects(3)

  const hasProjects = projects.length > 0
  const hasPersonalProjects = false

  return (
    <main className="h-dvh flex justify-center items-center">
      <AnimatedLogo />
    </main>
  )
}
