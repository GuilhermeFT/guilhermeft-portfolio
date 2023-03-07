/* eslint-disable @typescript-eslint/no-empty-type */

import { darkTheme } from './dark'

type Theme = typeof darkTheme

declare module 'styled-components' {
  export type DefaultTheme extends Theme {}
}
