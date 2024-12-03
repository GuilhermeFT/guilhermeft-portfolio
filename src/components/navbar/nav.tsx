import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'motion/react'
import { useEffect } from 'react'

type NavProps = {
  isOpen?: boolean
}

export const Nav = ({ isOpen }: NavProps) => {
  const pathname = usePathname()

  const paths = [
    {
      href: '/',
      label: 'Início',
    },
    {
      href: '/about-me',
      label: 'Sobre mim',
    },
    {
      href: '/projects',
      label: 'Projetos',
    },
    {
      href: '/articles',
      label: 'Blog',
    },
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <motion.nav
      className="fixed left-0 top-0 z-20 flex h-dvh w-dvw items-center justify-center bg-gft-background/90 backdrop-blur-lg"
      initial={{
        opacity: 0,
        y: '-100%',
      }}
      animate={{
        opacity: isOpen ? 1 : 0,
        y: isOpen ? 0 : '-100%',
        transition: {
          bounce: 0,
          duration: 0.5,
        },
      }}
    >
      <div className="flex flex-col gap-2">
        <span className="text-center text-sm uppercase text-zinc-400">
          Menu
        </span>

        <ul className="text-3xl font-bold md:text-5xl">
          {paths.map((path) => (
            <li key={path.href} className="flex justify-center p-4">
              <Link href={path.href} className="flex items-center gap-2">
                <span
                  className={twMerge(
                    'text-white',
                    pathname === path.href && 'text-g-blue',
                  )}
                >
                  {path.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
