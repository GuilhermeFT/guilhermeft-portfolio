import { Project } from '@/types/projects'

import { SquareContentOne } from './square-content-one'
import { SquareContentTwo } from './square-content-two'

export type SquareCardProps =
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

export const SquareCard = ({ ...props }: SquareCardProps) => {
  return (
    <div className="group aspect-square w-full bg-zinc-900 relative flex justify-center items-center overflow-hidden">
      {!props.isButton ? (
        <SquareContentOne {...props} />
      ) : (
        <SquareContentTwo {...props} />
      )}
    </div>
  )
}
