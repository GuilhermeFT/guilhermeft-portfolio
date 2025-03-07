import { JSXFunctionSerializer, JSXMapSerializer } from '@prismicio/react'

export const componentRender: JSXMapSerializer | JSXFunctionSerializer = {
  heading1: ({ children }) => (
    <h1 className="mt-4 text-4xl font-bold text-zinc-300">{children}</h1>
  ),
  heading2: ({ children }) => (
    <h2 className="mt-4 text-3xl font-semibold text-zinc-300">{children}</h2>
  ),
  heading3: ({ children }) => (
    <h3 className="mt-4 text-2xl font-medium text-zinc-300">{children}</h3>
  ),
  paragraph: ({ children }) => (
    <p className="text-g-light-gray indent-10 text-lg">{children}</p>
  ),
  listItem: ({ children }) => (
    <li className="text-g-light-gray ml-4 list-disc">{children}</li>
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
