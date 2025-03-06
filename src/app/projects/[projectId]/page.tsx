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
  console.log(project)

  const hasTechStack = project.stack.length > 0
  const hasProjectLink =
    project.project_link.link_type === 'Web' && !!project.project_link.url
  const hasRepoLink =
    project.repository_link.link_type === 'Web' && !!project.repository_link.url

  return (
    <main>
      <div className="flex min-h-dvh flex-col items-center justify-center gap-8 px-4">
        <div className="container flex flex-1 flex-col gap-2 pt-36 md:items-start">
          <h1 className="h-17 [font-size:_clamp(2rem,13.25vw,3rem)] md:text-[3rem]">
            {project.project_name as string}
          </h1>
          <span className="mb-4 block text-sm font-light text-zinc-400">
            {project?.year_started} — {project?.year_finished}
          </span>

          <section className="grid gap-4">
            <div className="h-max rounded-lg bg-gray-800 p-4 shadow-lg">
              <ul className="flex flex-col gap-4">
                {hasProjectLink ? (
                  <li className="flex items-center gap-2">
                    <strong className="text-gray-100">Link: </strong>
                    <PrismicNextLink
                      className="text-g-light-gray hover:text-g-light-blue underline transition-colors"
                      field={project.project_link}
                    >
                      {project.project_link.link_type === 'Web' &&
                        project.project_link?.url}
                    </PrismicNextLink>
                  </li>
                ) : null}

                {hasRepoLink ? (
                  <li className="flex items-center gap-2">
                    <strong className="text-gray-100">Repositório: </strong>
                    <PrismicNextLink
                      className="text-g-light-gray hover:text-g-light-blue underline transition-colors"
                      field={project.repository_link}
                    >
                      {project.repository_link.link_type === 'Web' &&
                        project.repository_link?.url}
                    </PrismicNextLink>
                  </li>
                ) : null}

                {hasTechStack ? (
                  <li className="flex items-center gap-2">
                    <strong className="text-gray-100">Tecnologias: </strong>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech.technology}
                          className="hover:text-g-dark-gray hover:bg-g-light-gray flex cursor-pointer items-center justify-center rounded-lg bg-gray-900 px-2 py-1 text-sm text-white transition-colors"
                        >
                          {tech.technology}
                        </span>
                      ))}
                    </div>
                  </li>
                ) : null}
              </ul>
            </div>

            <div className="group w-full overflow-hidden">
              <PrismicNextImage
                alt=""
                className="animate-fade transition-transform"
                field={project.image}
              />
            </div>
          </section>

          <section className="mt-32 mb-32 grid w-full gap-8 text-justify">
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
