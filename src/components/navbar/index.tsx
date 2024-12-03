'use client'

import { useState } from 'react'

import { Nav } from './nav'
import { ToggleButton } from './toggle-button'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <div className="">
      <ToggleButton isOpen={isMenuOpen} toggleMenu={handleToggleMenu} />

      <Nav isOpen={isMenuOpen} />
    </div>
  )
}
