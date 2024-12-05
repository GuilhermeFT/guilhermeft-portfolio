'use client'

import { useEffect, useState } from 'react'

import { Button } from '../button'

type TabMenuProps = {
  id?: string
  items: {
    id: string
    label: string
    content: React.ReactNode
  }[]
}

export const TabMenu = ({ id, items }: TabMenuProps) => {
  const selectedTab = items.find((item) => item.id === id)
  const [activeTab, setActiveTab] = useState(
    selectedTab ? selectedTab.id : items[0].id,
  )

  const activeTitle = items.find((item) => item.id === activeTab)?.label
  const activeContent = items.find((item) => item.id === activeTab)?.content

  const handleTabClick = (id: string) => {
    setActiveTab(id)
  }

  useEffect(() => {
    if (id) {
      document.getElementById('about-me')?.scrollIntoView()
    }
  }, [id])

  return (
    <div className="flex min-h-96 flex-col gap-4">
      <header className="bg-g-dark-blue/20 px-4 py-4 md:top-24">
        <div className="container">
          <nav>
            <ul className="flex flex-wrap justify-center gap-4">
              {items.map((item) => (
                <li key={item.id} onClick={() => handleTabClick(item.id)}>
                  <Button
                    variant={item.id === activeTab ? 'primary' : 'secondary'}
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div className="container flex flex-col gap-8 px-4 text-justify text-lg text-gft-light-gray">
        <h1 className="text-center text-4xl font-bold text-white md:text-left">
          {activeTitle}
        </h1>

        {activeContent}
      </div>
    </div>
  )
}
