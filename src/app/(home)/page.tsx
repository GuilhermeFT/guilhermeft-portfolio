import { HeroSection } from './components/hero-section'

import { StackSection } from './components/stack-section'
import { SelectedProjects } from './components/selected-projects'
import { RecentProjects } from './components/recent-projects'
import { TextSection } from './components/text-section'
import { AllProjects } from './components/all-projects'

export default async function Home() {
  return (
    <main>
      <HeroSection />

      <RecentProjects />

      <StackSection />

      <TextSection />

      <SelectedProjects />

      <AllProjects />
    </main>
  )
}
