'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { ReactElement } from 'react'

type ScrollFadeProps = {
  children: ReactElement
}

export const ScrollFade = ({ children }: ScrollFadeProps) => {
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  return <motion.div style={{ opacity }}>{children}</motion.div>
}
