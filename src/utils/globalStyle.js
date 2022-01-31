import { createGlobalStyle } from 'styled-components'

import { colors, fonts } from './variables'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    background: ${colors.shark};
    width: 100%;
  }

  body {
    color: ${colors.white};
    font-family: ${fonts.default};
    margin: 0;

    & > div {
      overflow-x: hidden;
    }
  }

  main {
    width: 100vw;
  }

  ::-moz-selection,
  ::-webkit-selection,
  ::selection {
    background: ${colors.ripeLemon};
    color: ${colors.shark};
  }

  a, button {
    color: ${colors.shark};
    cursor: pointer;
    text-decoration: none;

    &:visited {
      color: inherit;
    }
  }
`
