import { ITheme } from 'infinity-forge'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    green: string,
    black: string,
    grey: string,
  }
}
