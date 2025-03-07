import { TabMenuType } from '@/types/tab-menu'
import { Journey } from './tab-content/journey'
import { HardSkills } from './tab-content/hard-skills'
import { SoftSkills } from './tab-content/soft-skills'

export const tabMenuItems: TabMenuType[] = [
  {
    id: 'my-journey',
    label: 'Minha Jornada',
    content: <Journey />,
  },
  {
    id: 'hard-skills',
    label: 'Hard Skills',
    content: <HardSkills />,
  },
  {
    id: 'soft-skills',
    label: 'Soft Skills',
    content: <SoftSkills />,
  },
]
