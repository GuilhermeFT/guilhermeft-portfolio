import { RectangleContentOne } from './rectangle-content-one'
import { RectangleContentTwo } from './rectangle-content-two'

import { Project } from '@/types/projects'

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
    <div className="group relative flex aspect-3/4 w-full items-center justify-center overflow-hidden bg-gray-900">
      {!props.isButton ? (
        <RectangleContentOne {...props} />
      ) : (
        <RectangleContentTwo {...props} />
      )}
    </div>
  )
}
