import colors from './colors'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
}

body {
    max-width: 100vw;
    height: 100vh;

    padding: 4rem 14rem 0rem 14rem;
}

body {
    background: ${colors.bgDark};
    color: ${colors.fgDark};

    font-family: 'Lexend';
    /* overflow:hidden; */
}

#root{
    display: grid;
    grid-template-rows: 4rem 1fr;
    row-gap: 2rem;
    /* align-items: center; */
    height:100%;
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