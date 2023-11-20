import 'styled-components'
import { defaultTheme } from '../styles/theme/default'

type ThemeType = typeof defaultTheme // cria um type com base no modelo de dados de defaultTheme

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType {} // exporta um tema com base em defaultTheme
}