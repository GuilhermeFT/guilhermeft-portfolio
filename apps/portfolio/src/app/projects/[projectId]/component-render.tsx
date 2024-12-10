/* eslint-disable import/named */
import { JSXFunctionSerializer, JSXMapSerializer } from '@prismicio/react'

export const componentRender: JSXMapSerializer | JSXFunctionSerializer = {
  heading1: ({ children }) => (
    <h1 className="text-4xl font-bold text-zinc-100">{children}</h1>
  ),
  heading2: ({ children }) => (
    <h2 className="text-2xl font-bold text-zinc-100">{children}</h2>
  ),
  paragraph: ({ children }) => (
    <p className="indent-10 text-xl text-zinc-200">{children}</p>
  ),
}
