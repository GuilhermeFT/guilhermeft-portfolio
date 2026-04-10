import Image from 'next/image'
import Link from 'next/link'

import { getProjectBySlug } from '@/services/payload/projects'
import { RichText } from '@/components/rich-text'
import { PageProps } from '@/types/page'

type ProjectProps = {
  projectId: string
}

export default async function Project(props: PageProps<ProjectProps>) {
  const params = await props.params

  const { projectId } = params

  const project = await getProjectBySlug(projectId)

  if (!project) {
    return (
      <main className="container max-w-7xl">
        <div className="flex min-h-dvh flex-col items-center justify-center">
          <p className="text-lg text-zinc-400">Projeto não encontrado</p>
        </div>
      </main>
    )
  }

  const hasTechStack = project.stack.length > 0
  const hasProjectLink = !!project.projectLink
  const hasRepoLink = !!project.repositoryLink

  return (
    <main className="container max-w-7xl">
      <div className="flex min-h-dvh flex-col items-center justify-center gap-8 px-4">
        <div className="container flex flex-1 flex-col gap-2 pt-36 md:items-start">
          <span className="block text-sm font-light text-zinc-400">
            {project?.yearStarted} — {project?.yearFinished}
          </span>
          <h1 className="h-17 [font-size:_clamp(2rem,13.25vw,3rem)] md:text-[3rem]">
            {project.name}
          </h1>

          <div className="h-max w-full rounded p-4 shadow-lg">
            <ul className="flex flex-col gap-4">
              {hasProjectLink ? (
                <li className="flex items-center gap-2">
                  <strong className="text-gray-100">Link: </strong>
                  <Link
                    href={project.projectLink ?? '#'}
                    target="_blank"
                    className="text-g-light-gray hover:text-g-light-blue underline transition-colors"
                  >
                    {project.projectLink}
                  </Link>
                </li>
              ) : null}

              {hasRepoLink ? (
                <li className="flex items-center gap-2">
                  <strong className="text-gray-100">Repositório: </strong>
                  <Link
                    href={project.repositoryLink ?? '#'}
                    target="_blank"
                    className="text-g-light-gray hover:text-g-light-blue underline transition-colors"
                  >
                    {project.repositoryLink}
                  </Link>
                </li>
              ) : null}

              {hasTechStack ? (
                <li className="flex gap-2">
                  <strong className="text-gray-100">Tecnologias: </strong>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="hover:text-g-dark-gray hover:bg-g-light-gray flex cursor-pointer items-center justify-center rounded-lg bg-gray-900 px-2 py-1 text-sm text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </li>
              ) : null}
            </ul>
          </div>

          {project.imageUrl ? (
            <section className="mt-16 grid gap-4">
              <div className="group relative w-full overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill
                  className="animate-fade object-cover transition-transform"
                />
              </div>
            </section>
          ) : null}

          <section className="mt-16 mb-32 grid w-full gap-2 text-justify text-pretty">
            <RichText content={project.content} />
          </section>
        </div>
      </div>
    </main>
  )
}
