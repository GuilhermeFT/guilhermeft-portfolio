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
    <div className="group relative flex aspect-square w-full items-center justify-center overflow-hidden bg-zinc-900">
      {!props.isButton ? (
        <SquareContentOne {...props} />
      ) : (
        <SquareContentTwo {...props} />
      )}
    </div>
  )
}
