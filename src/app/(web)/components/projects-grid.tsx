'use client'

import { useState, useEffect, useRef } from 'react'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
  useReducedMotion,
} from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { type Project } from '@/services/payload/projects'
import { cn } from '@/lib/utils'

const FILTER_CATEGORIES = ['Todos', 'Sistemas', 'Web', 'Automação'] as const
type FilterCategory = (typeof FILTER_CATEGORIES)[number]

function AnimatedCounter({ target }: { target: number }) {
  const shouldReduceMotion = useReducedMotion()
  const countValue = useMotionValue(0)
  const [display, setDisplay] = useState(shouldReduceMotion ? target : 0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplay(target)
      return
    }
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const controls = animate(countValue, target, {
            duration: 1.2,
            ease: [0.3, 0, 0.5, 1],
            onUpdate: (v) => setDisplay(Math.round(v)),
          })
          return () => controls.stop()
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, countValue, shouldReduceMotion])

  return <span ref={ref}>{display}</span>
}

function CaseCard({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden bg-surface',
        !shouldReduceMotion &&
          'transition-[transform,box-shadow] duration-300 ease-[var(--ease-watracz)] hover:-translate-y-2 hover:shadow-[0_12px_40px_-8px_rgba(15,20,30,0.18)]',
      )}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16 / 10' }}>
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.imageAlt ?? project.name}
            fill
            className={cn(
              'object-cover',
              !shouldReduceMotion &&
                'transition-transform duration-300 ease-[var(--ease-watracz)] group-hover:scale-105',
            )}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-darkest/5" />
        )}

        {/* Hover overlay with CTA */}
        <div
          className={cn(
            'absolute inset-0 flex items-end p-5',
            !shouldReduceMotion
              ? 'opacity-0 transition-opacity duration-300 group-hover:opacity-100'
              : 'opacity-0 focus-within:opacity-100 group-hover:opacity-100',
          )}
          style={{ background: 'rgba(15,20,30,0.85)' }}
        >
          <span className="text-sm font-[800] uppercase tracking-[0.2em] text-white">
            Ver case →
          </span>
        </div>

        {/* Category badge */}
        {project.category && (
          <span className="absolute left-4 top-4 bg-darkest px-2.5 py-1 text-[0.6875rem] font-[600] uppercase tracking-[0.2em] text-white">
            {project.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-[1.125rem] font-[800] leading-tight tracking-[-0.01em] text-foreground">
          {project.name}
        </h3>

        {project.problem && (
          <p className="line-clamp-1 text-sm text-muted-foreground">
            {project.problem}
          </p>
        )}

        {project.solution && (
          <p className="line-clamp-2 text-sm leading-relaxed text-foreground/70">
            {project.solution}
          </p>
        )}

        {project.stack.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="border border-border bg-background px-2 py-0.5 text-[0.6875rem] font-[500] uppercase tracking-[0.1em] text-gray-dark"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="px-1 py-0.5 text-[0.6875rem] text-gray-mid">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        )}

        {project.result && (
          <div className="mt-auto border-t border-border pt-4">
            <p className="mb-1 text-[0.6875rem] font-[600] uppercase tracking-[0.15em] text-gray-dark">
              Resultado
            </p>
            <span className="text-[1.125rem] font-[800] tracking-[-0.01em] text-foreground">
              {project.result}
            </span>
          </div>
        )}
      </div>

      {/* Full-card link overlay */}
      {project.projectLink && (
        <Link
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`Ver case: ${project.name}`}
        />
      )}
    </article>
  )
}

interface ProjectsGridProps {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const shouldReduceMotion = useReducedMotion()
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('Todos')

  const filtered =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="flex flex-col gap-12">
      {/* Header: title + counter + filter buttons */}
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '100px', amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.3, 0, 0.5, 1] }}
        className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
      >
        <h2 className="text-[clamp(2.125rem,4vw,2.75rem)] font-[800] leading-none tracking-[-0.01em] text-foreground">
          Projetos{' '}
          <span className="text-[clamp(1.125rem,2vw,1.375rem)] font-[500] text-muted-foreground">
            (<AnimatedCounter target={projects.length} />)
          </span>
        </h2>

        {/* Filter buttons with shared-layout active indicator */}
        <div className="flex flex-wrap gap-1" role="group" aria-label="Filtrar por categoria">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={cn(
                'relative overflow-hidden px-4 py-2 text-xs font-[600] uppercase tracking-[0.2em] transition-colors duration-150',
                activeCategory === cat
                  ? 'text-white'
                  : 'bg-surface text-gray-dark hover:text-foreground',
              )}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="filter-active-bg"
                  className="absolute inset-0 bg-darkest"
                  transition={{ duration: 0.25, ease: [0.3, 0, 0.5, 1] }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid with AnimatePresence for filter reflow */}
      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.4,
                  ease: [0.3, 0, 0.5, 1],
                  delay: shouldReduceMotion ? 0 : Math.min(i * 0.08, 0.4),
                }}
              >
                <CaseCard project={project} />
              </motion.div>
            ))
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full py-20 text-center text-muted-foreground"
            >
              Nenhum projeto nesta categoria ainda.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
