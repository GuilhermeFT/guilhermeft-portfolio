/* eslint-disable @typescript-eslint/no-empty-interface */

import { darkTheme } from './dark'

type Theme = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
