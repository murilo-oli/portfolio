import colors from './colors'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html,
body {
    max-width: 100vw;
    height: 100vh;
    overflow-x: hidden;

    padding: 2rem 8rem;
}

body {
    background: ${colors.bgDark};
    color: ${colors.fgDark};

    font-family: 'Lexend';
}

span {
    font-size: 0.9rem;
}

a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
}
`

export default GlobalStyle;