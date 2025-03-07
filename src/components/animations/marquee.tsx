'use client'
import useWindowSize from '@/hooks/use-window-size'
import {
  motion,
  MotionValue,
  PanInfo,
  useSpring,
  useTransform,
} from 'motion/react'
import { useEffect, useRef } from 'react'
import { useRafLoop } from 'react-use'

type MarqueeProps = {
  children: React.ReactNode
  speed?: number
}

const MarqueeItem: React.FC<MarqueeItemProps> = (props) => {
  const { children, speed } = props

  const itemRef = useRef<HTMLDivElement>(null)
  const rectRef = useRef<DOMRect | null>(null)
  const x = useRef(0)
  const { width, height } = useWindowSize()

  const setX = () => {
    if (!itemRef.current || !rectRef.current) {
      return
    }

    const xPercentage = (x.current / rectRef.current.width) * 100

    if (xPercentage < -100) {
      x.current = 0
    }

    if (xPercentage > 0) {
      x.current = -rectRef.current.width
    }

    itemRef.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`
  }

  useEffect(() => {
    if (itemRef.current) {
      rectRef.current = itemRef.current.getBoundingClientRect()
    }
  }, [width, height])

  const loop = () => {
    //Substracts the current x from the speed set by useSpring
    x.current -= speed.get()
    setX()
  }

  const [_, loopStart] = useRafLoop(loop, false)

  useEffect(() => {
    loopStart()
  }, [loopStart])

  return (
    <motion.div className="flex whitespace-nowrap" ref={itemRef}>
      {children}
    </motion.div>
  )
}

export const Marquee = ({ children, speed = 1 }: MarqueeProps) => {
  const dragFactor = 1.2
  const threshold = 0.014

  const { width } = useWindowSize()

  const x = useRef(0)
  const slowDown = useRef(false)

  const speedSpring = useSpring(speed, {
    damping: 40,
    stiffness: 90,
    mass: 5,
  })

  const skewX = useTransform(
    speedSpring,
    [-width * 0.05, 0, width * 0.05],
    [1, 0, 1],
  )

  const handleDragStart = () => {
    slowDown.current = true
    speedSpring.set(0)
  }

  const handleOnDrag = (_: Event, info: PanInfo) => {
    speedSpring.set(dragFactor * -info.delta.x)
  }

  const handleDragEnd = () => {
    slowDown.current = false
    //rest to the original speed
    x.current = speed
  }

  const loop = () => {
    /**
     * Do nothing if we're slowing down
     * or
     * Our x is less than the threshold
     *
     * The threshold basically tells how much to speed up
     *
     * Without this stop - x.current will mutiple expodentially
     */
    if (slowDown.current || Math.abs(x.current) < threshold) {
      return
    }

    /**
     * This portion speeds up the spring until it reaches the `threshold`
     */
    x.current *= 0.66

    if (x.current < 0) {
      x.current = Math.min(x.current, 0)
    } else {
      x.current = Math.max(x.current, 0)
    }

    //speedSpring sets the speed for the marquee items that gets passed to the item components
    speedSpring.set(speed + x.current)
  }

  useRafLoop(loop)

  return (
    <motion.div
      initial={{ skewX: 0 }}
      style={{ skewX }}
      className="flex w-full min-w-full"
      drag="x"
      dragPropagation
      dragConstraints={{ left: 0, right: 0 }}
      onDragStart={handleDragStart}
      onDrag={handleOnDrag}
      onDragEnd={handleDragEnd}
      dragElastic={0.000001}
    >
      <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
      <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
    </motion.div>
  )
}

type MarqueeItemProps = {
  children: React.ReactNode
  speed: MotionValue<number>
}
