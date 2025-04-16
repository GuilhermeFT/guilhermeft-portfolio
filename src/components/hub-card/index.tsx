import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface HubCardProps {
  title: string
  subtitle: string
  href: string
  imageSrc: StaticImageData
  alt: string
  className?: string
}

export function HubCard({
  title,
  subtitle,
  href,
  imageSrc,
  alt,
  className = '',
}: HubCardProps) {
  return (
    <Link
      href={href}
      className={`group relative block h-96 overflow-hidden rounded-xl transition-all hover:scale-[1.02] ${className}`}
    >
      <div className="from-g-background/80 to-g-dark-gray/50 group-hover:to-g-dark-gray/0 group-hover:from-g-background/60 relative z-10 h-full w-full bg-gradient-to-l p-6 text-white transition-all duration-1000 group-hover:bg-gradient-to-r">
        <p className="text-sm md:text-xl">{subtitle}</p>
        <h3 className="mb-4 text-2xl font-bold text-white uppercase md:text-4xl">
          {title}
        </h3>
      </div>

      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover object-right"
      />
    </Link>
  )
}
