/* eslint-disable import/named */
import { JSXFunctionSerializer, JSXMapSerializer } from '@prismicio/react'

export const componentRender: JSXMapSerializer | JSXFunctionSerializer = {
  heading1: ({ children }) => (
    <h1 className="font-bold text-3xl text-zinc-300">{children}</h1>
  ),
  heading2: ({ children }) => (
    <h2 className="font-bold text-2xl text-zinc-300">{children}</h2>
  ),
  paragraph: ({ children }) => (
    <p className="text-lg indent-10 text-zinc-300">{children}</p>
  ),
}
