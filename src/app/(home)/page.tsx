import { HeroSection } from './components/hero-section'

import { StackSection } from './components/stack-section'
import { SelectedProjects } from './components/selected-projects'
import { RecentProjects } from './components/recent-projects'
import { TextSection } from './components/text-section'
import { AllProjects } from './components/all-projects'
import { AboutMe } from './components/about-me'
import { ContactMe } from './components/contact-me'

export default async function Home() {
  return (
    <main>
      <HeroSection />

      <RecentProjects />

      <StackSection />

      <TextSection />

      <SelectedProjects />

      <AllProjects />

      <AboutMe />

      <ContactMe />
    </main>
  )
}
