'use client'

import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

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
    <div className="flex flex-col gap-4 min-h-96">
      <header className="bg-zinc-800 px-4 py-4 sticky top-0">
        <div className="container">
          <nav>
            <ul className="flex justify-center gap-4 flex-wrap">
              {items.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={twMerge(
                    'px-4 py-2 cursor-pointer rounded transition-colors  hover:bg-zinc-700',
                    item.id === activeTab ? 'bg-zinc-700' : '',
                  )}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div className="container flex flex-col gap-8 text-gft-light-gray text-lg text-justify px-4">
        <h1 className="text-white font-bold text-4xl text-center md:text-left">
          {activeTitle}
        </h1>

        {activeContent}
      </div>
    </div>
  )
}
