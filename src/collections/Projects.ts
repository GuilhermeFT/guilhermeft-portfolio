import { CollectionConfig, CollectionAfterChangeHook } from 'payload'

const revalidateProjects: CollectionAfterChangeHook = async () => {
  if (!process.env.NEXT_PUBLIC_SERVER_URL || !process.env.REVALIDATE_SECRET)
    return
  await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/revalidate`, {
    method: 'POST',
    headers: { 'x-revalidate-secret': process.env.REVALIDATE_SECRET },
  })
}

const STACK_OPTIONS = [
  { label: 'TypeScript', value: 'TypeScript' },
  { label: 'JavaScript', value: 'JavaScript' },
  { label: 'Next.js', value: 'Next.js' },
  { label: 'React', value: 'React' },
  { label: 'React Native', value: 'React Native' },
  { label: 'Node.js', value: 'Node.js' },
  { label: 'Go', value: 'Go' },
  { label: 'Python', value: 'Python' },
  { label: 'Kotlin', value: 'Kotlin' },
  { label: 'Java', value: 'Java' },
  { label: 'PostgreSQL', value: 'PostgreSQL' },
  { label: 'Docker', value: 'Docker' },
  { label: 'Tailwind CSS', value: 'Tailwind CSS' },
  { label: 'Framer Motion', value: 'Framer Motion' },
  { label: 'Styled Components', value: 'Styled Components' },
  { label: 'Redux', value: 'Redux' },
  { label: 'Jest', value: 'Jest' },
  { label: 'Cypress', value: 'Cypress' },
]

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'isHighlighted', 'yearStarted', 'yearFinished'],
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateProjects],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nome do Projeto',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug (URL)',
      required: true,
      unique: true,
      admin: {
        description: 'Usado na URL: /projects/[slug]',
      },
    },
    {
      name: 'isHighlighted',
      type: 'checkbox',
      label: 'Projeto em Destaque',
      defaultValue: false,
    },
    {
      name: 'projectLink',
      type: 'text',
      label: 'Link do Projeto (URL)',
    },
    {
      name: 'repositoryLink',
      type: 'text',
      label: 'Link do Repositório (GitHub)',
    },
    {
      name: 'yearStarted',
      type: 'number',
      label: 'Ano de Início',
    },
    {
      name: 'yearFinished',
      type: 'number',
      label: 'Ano de Conclusão',
      admin: {
        description: 'Deixe em branco se ainda em andamento',
      },
    },
    {
      name: 'stack',
      type: 'select',
      label: 'Tecnologias',
      hasMany: true,
      options: STACK_OPTIONS,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagem do Card',
    },
    {
      name: 'banner',
      type: 'upload',
      relationTo: 'media',
      label: 'Banner (imagem grande)',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Conteúdo / Descrição',
    },
  ],
}
