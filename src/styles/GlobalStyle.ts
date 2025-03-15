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
    color: ${colors.fgDark};    
    font-family: 'Lexend';
    background: ${colors.bgDark};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}


#root{
    display: grid;
    grid-template-rows: 4rem 1fr max-content;
    row-gap: 2rem;
    padding-top:4rem;
    padding-bottom:0.8rem;
    height:100%;
    width: 55rem;
    z-index:0;
}

#root main{
}

span {
    font-size: 0.9rem;
}

a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
}

@media only screen and (max-width: 900px) {
    #root{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        padding:1rem;
        height:100%;
    }

    body{
        padding:0;
    }
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