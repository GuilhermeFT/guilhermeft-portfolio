import { JSXFunctionSerializer, JSXMapSerializer } from '@prismicio/react'

export const componentRender: JSXMapSerializer | JSXFunctionSerializer = {
  heading1: ({ children }) => (
    <h1 className="my-4 text-4xl font-bold text-zinc-100">{children}</h1>
  ),
  heading2: ({ children }) => (
    <h2 className="my-3 text-3xl font-semibold text-zinc-100">{children}</h2>
  ),
  heading3: ({ children }) => (
    <h3 className="my-2 text-2xl font-medium text-zinc-100">{children}</h3>
  ),
  paragraph: ({ children }) => (
    <p className="my-2 indent-10 text-xl text-zinc-200">{children}</p>
  ),
  listItem: ({ children }) => (
    <li className="ml-4 list-disc text-zinc-200">{children}</li>
  ),
  hyperlink: ({ children, node }) => (
    <a
      href={node.data.url}
      className="text-g-light-blue hover:text-g-dark-blue underline transition-colors"
    >
      {children}
    </a>
  ),
}
