/* eslint-disable react-hooks/exhaustive-deps */
import {
  DOMKeyframesDefinition,
  DynamicAnimationOptions,
  ElementOrSelector,
  useAnimate,
} from 'motion/react'
import { useEffect, useRef } from 'react'

type AnimateParams = [
  ElementOrSelector,
  DOMKeyframesDefinition,
  (DynamicAnimationOptions | undefined)?,
]

type Animation = AnimateParams | Animation[]

export const useAnimationTimeline = (keyframes: Animation[], count = 1) => {
  const mounted = useRef(false)
  const [scope, animate] = useAnimate()

  const processKeyframe = async (keyframe: Animation) => {
    if (Array.isArray(keyframe[0])) {
      await Promise.all(
        keyframe.map(async (kf) => await processKeyframe(kf as AnimateParams)),
      )
    } else {
      await animate(...(keyframe as AnimateParams))
    }
  }

  const handleAnimation = async () => {
    for (let i = 0; i < count; i++) {
      if (!mounted.current) return

      for (const keyframe of keyframes) {
        if (!mounted.current) return

        await processKeyframe(keyframe)
      }
    }
  }

  useEffect(() => {
    mounted.current = true

    handleAnimation()

    return () => {
      mounted.current = false
    }
  }, [])

  return scope
}
