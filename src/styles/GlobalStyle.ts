import colors from './colors'
import styled, { createGlobalStyle } from 'styled-components'

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

    padding-left:18rem;
    padding-right:18rem;
}

body {
    background: ${colors.bgDark};
    color: ${colors.fgDark};

    font-family: 'Lexend';
    /* overflow:hidden; */
}

#root{
    display: grid;
    grid-template-rows: 4rem 1fr max-content;
    row-gap: 2rem;
    padding-left:4rem;
    padding-right:4rem;
    padding-top:4rem;
    padding-bottom:0.8rem;
    /* align-items: center; */
    height:100%;
    background:linear-gradient(#20202052,#00000000);
    z-index:0;
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

const Footer = styled.span`
    text-align:center;
    color:${colors.fgGray};
    white-space:nowrap;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export {GlobalStyle, Footer};