import { Project } from '@/types/projects'

import { RectangleContentOne } from './rectangle-content-one'
import { RectangleContentTwo } from './rectangle-content-two'

export type RectangleCardProps =
  | {
      isButton: true
      className?: string
      id?: string
      href?: string
      project?: Project
    }
  | {
      isButton: false
      className?: string
      id?: string
      href?: string
      project: Project
    }

export const RectangleCard = ({ ...props }: RectangleCardProps) => {
  return (
    <div className="group aspect-[3/4] w-full bg-zinc-900 relative flex justify-center items-center overflow-hidden">
      {!props.isButton ? (
        <RectangleContentOne {...props} />
      ) : (
        <RectangleContentTwo {...props} />
      )}
    </div>
  )
}
