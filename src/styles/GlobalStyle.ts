import colors from './colors'
import styled, { createGlobalStyle } from 'styled-components'
import BGPattern from '../assets/images/wave-pattern.svg';

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
    padding-left:20rem;
    padding-right:20rem;
    color: ${colors.fgDark};    
    font-family: 'Lexend';
    background: ${colors.bgDark} url(${BGPattern});
    background-repeat:no-repeat;
    background-position: bottom;
    background-size:contain;
    /* overflow:hidden; */
}


#root{
    display: grid;
    grid-template-rows: 4rem 1fr max-content;
    row-gap: 2rem;
    padding-left:2rem;
    padding-right:2rem;
    padding-top:4rem;
    padding-bottom:0.8rem;
    /* align-items: center; */
    height:100%;
    /* background:linear-gradient(#20202040 0%,#00000000 80%); */
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

@media only screen and (max-width: 900px) {
    #root{
        display:flex;
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