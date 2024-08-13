import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'

import { PageTitle } from '@/components/page-title'
import { getProjectByUid } from '@/services/projects'
import { PageProps } from '@/types/page'

import { componentRender } from './component-render'

type ProjectProps = {
  projectId: string
}

export default async function Project({
  params: { projectId },
}: PageProps<ProjectProps>) {
  const project = (await getProjectByUid(projectId)).data

  const hasTechStack = project.stack.length > 0
  const hasProjectLink =
    !!project.project_link.url && project.project_link.link_type === 'Web'
  const hasRepoLink =
    !!project.repository_link.url && project.repository_link.link_type === 'Web'

  return (
    <main>
      <div className="min-h-[calc(100dvh-5rem)] px-4 bg-gradient-to-b from-gft-dark-gray from-60%% to-gft-background flex flex-col justify-center items-center gap-8">
        <div className="container flex flex-1 flex-col pt-36 gap-2 md:items-start">
          <PageTitle className="[font-size:_clamp(2rem,13.25vw,3rem)] h-17 md:text-[3rem]">
            {project.project_name as string}
          </PageTitle>
          <span className="block font-light text-gft-light-gray text-sm">
            {project?.year_started} — {project?.year_finished}
          </span>

          <section className="grid gap-8 grid-cols-1 xl:grid-cols-3">
            <div className="p-4 bg-zinc-800 rounded-lg border-2 border-gft-purple h-max">
              <ul className="flex flex-col gap-2">
                {hasTechStack ? (
                  <li className="flex gap-2">
                    <p className="text-zinc-200">
                      <strong className="text-white">Tecnologias: </strong>
                      {project.stack.map((tech) => tech.technology).join(', ')}.
                    </p>
                  </li>
                ) : null}

                {hasProjectLink ? (
                  <li className="flex gap-2">
                    <p className="text-zinc-200">
                      <strong className="text-white">Link: </strong>
                      <PrismicNextLink
                        className="underline hover:text-gray-400"
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
                        className="underline hover:text-gray-400"
                        field={project.repository_link}
                      >
                        {project.repository_link?.url}
                      </PrismicNextLink>
                    </p>
                  </li>
                ) : null}
              </ul>
            </div>

            <div className="group max-h-[40rem] overflow-hidden xl:col-span-2">
              <PrismicNextImage
                className="animate-fade transition-transform"
                field={project.image}
              />
            </div>
          </section>

          <section className="mt-32 mb-32 w-full grid gap-8 text-justify">
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
