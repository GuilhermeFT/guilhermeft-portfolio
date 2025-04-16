interface TimelineItemProps {
  step: number
  title: string
  description: string
  position: 'left' | 'right'
}

export function TimelineItem({
  step,
  title,
  description,
  position,
}: TimelineItemProps) {
  return (
    <div className="relative flex flex-col items-center md:block">
      {/* Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 md:top-6">
        <div className="bg-g-blue flex h-12 w-12 items-center justify-center rounded-full text-white">
          {step}
        </div>
      </div>

      {/* Content */}
      <div
        className={`bg-g-dark-gray/20 mt-16 w-full rounded-lg p-6 md:mt-0 md:w-[calc(50%-2rem)] ${
          position === 'right' ? 'md:ml-auto' : ''
        }`}
      >
        <h3 className="text-g-blue mb-2 text-xl font-bold">{title}</h3>
        <p className="text-g-light-gray">{description}</p>
      </div>
    </div>
  )
}
