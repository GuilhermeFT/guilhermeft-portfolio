import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'

import { PageTitle } from '@/components/page-title'
import { getProjectByUid } from '@/services/prismic/projects'
import { PageProps } from '@/types/page'

import { componentRender } from './component-render'

type ProjectProps = {
  projectId: string
}

export default async function Project(props: PageProps<ProjectProps>) {
  const params = await props.params

  const { projectId } = params

  const project = (await getProjectByUid(projectId)).data

  const hasTechStack = project.stack.length > 0
  const hasProjectLink =
    !!project.project_link.url && project.project_link.link_type === 'Web'
  const hasRepoLink =
    !!project.repository_link.url && project.repository_link.link_type === 'Web'

  return (
    <main>
      <div className="flex min-h-dvh flex-col items-center justify-center gap-8 px-4">
        <div className="container flex flex-1 flex-col gap-2 pt-36 md:items-start">
          <PageTitle className="h-17 [font-size:_clamp(2rem,13.25vw,3rem)] md:text-[3rem]">
            {project.project_name as string}
          </PageTitle>

          <span className="block text-sm font-light text-zinc-400">
            {project?.year_started} — {project?.year_finished}
          </span>

          <section className="grid grid-cols-1 gap-8 xl:grid-cols-3">
            <div className="h-max rounded-lg border-2 border-g-blue p-4">
              <ul className="flex flex-col gap-2">
                {hasProjectLink ? (
                  <li className="flex gap-2">
                    <p className="text-zinc-200">
                      <strong className="text-white">Link: </strong>
                      <PrismicNextLink
                        className="text-zinc-300 underline hover:text-gray-400"
                        field={project.project_link}
                      >
                        {project.project_link?.url}
                      </PrismicNextLink>
                    </p>
                  </li>
                ) : null}

                {hasRepoLink ? (
                  <li className="flex gap-2">
                    <p className="text-zinc-200">
                      <strong className="text-white">Repositório: </strong>
                      <PrismicNextLink
                        className="text-zinc-300 underline hover:text-gray-400"
                        field={project.repository_link}
                      >
                        {project.repository_link?.url}
                      </PrismicNextLink>
                    </p>
                  </li>
                ) : null}

                {hasTechStack ? (
                  <li className="flex gap-2">
                    <p className="flex flex-wrap items-center gap-2 text-zinc-200">
                      <strong className="text-white">Tecnologias: </strong>
                      {project.stack.map((tech) => (
                        <span
                          key={tech.technology}
                          className="flex items-center justify-center rounded-lg bg-g-dark-blue px-2 py-1 text-sm"
                        >
                          {tech.technology}
                        </span>
                      ))}
                      .
                    </p>
                  </li>
                ) : null}
              </ul>
            </div>

            <div className="group max-h-[40rem] overflow-hidden xl:col-span-2">
              <PrismicNextImage
                alt=""
                className="animate-fade transition-transform"
                field={project.image}
              />
            </div>
          </section>

          <section className="mb-32 mt-32 grid w-full gap-8 text-justify">
            <PrismicRichText
              components={componentRender}
              field={project.content}
            />
          </section>
        </div>
      </div>
    </main>
  )
}
