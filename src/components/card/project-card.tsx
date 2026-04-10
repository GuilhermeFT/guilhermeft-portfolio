import Link from 'next/link'
import Image from 'next/image'
import { type Project } from '@/services/payload/projects'

/** Per-project brand colors — fallback to darkest */
const projectColors: Record<string, string> = {}

function getBgColor(slug: string): string {
  return projectColors[slug] ?? '#0F141E'
}

function formatYears(start?: number | null, end?: number | null): string {
  if (!start) return ''
  if (!end || end === start) return String(start)
  return `${start} — ${end}`
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const bg = getBgColor(project.slug)
  const years = formatYears(project.yearStarted, project.yearFinished)

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block w-full overflow-hidden"
      style={{ backgroundColor: bg, aspectRatio: '1 / 1.40' }}
    >
      {/* Dark hover overlay */}
      <span
        aria-hidden
        className="absolute inset-0 z-10 bg-[rgba(15,20,30,0.9)] opacity-0 transition-opacity duration-200 ease-linear group-hover:opacity-100"
      />

      {/* Project image */}
      {project.imageUrl ? (
        <Image
          src={project.imageUrl}
          alt={project.imageAlt ?? project.name}
          fill
          className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-40"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div className="absolute inset-0 animate-pulse bg-surface/20" />
      )}

      {/* Default text (visible at rest) */}
      <div className="absolute bottom-0 left-0 z-20 p-8 transition-opacity duration-200 ease-linear group-hover:opacity-0">
        {years && (
          <span className="block text-[0.875rem] font-[400] uppercase tracking-[0.4em] text-white/70">
            {years}
          </span>
        )}
        <span className="mt-2 block max-w-xs text-[1.75rem] font-[800] leading-[2.1875rem] tracking-[-0.01em] text-white">
          {project.name}
        </span>
      </div>

      {/* Hover text (slides up on hover) */}
      <div className="absolute bottom-0 left-0 z-20 translate-y-4 p-8 opacity-0 transition-all duration-200 ease-linear group-hover:translate-y-0 group-hover:opacity-100">
        {years && (
          <span className="block text-[0.875rem] font-[400] uppercase tracking-[0.4em] text-white/70">
            {years}
          </span>
        )}
        <span className="mt-2 block max-w-xs text-[1.75rem] font-[800] leading-[2.1875rem] tracking-[-0.01em] text-white">
          {project.name}
        </span>
        <span className="mt-3 block text-sm font-[800] uppercase tracking-[0.2em] text-white/80">
          Ver Case Study →
        </span>
      </div>
    </Link>
  )
}
