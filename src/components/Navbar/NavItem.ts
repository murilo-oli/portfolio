import colors from "../../styles/colors";
import styled, { keyframes } from "styled-components";

const hover_nav = keyframes`
    0% {width: 0;}
    10% {width: .2rem;}
    100% {width: 100%;}
`;

const hover_text = keyframes`
    0% {color: ${colors.fgDark};}
    10% {color: ${colors.bgDark};}
    100% {color: ${colors.bgDark};}
`;

export const Item = styled.a`
    position: relative;
    display: flex;
    cursor: pointer;
    color: ${colors.fgDark};
    font-weight:400;
    font-family: "Lexend";
    font-size: 1rem;
    padding: 0 0.5rem;
    z-index:0;
    
    &::before{
        content: "";
        /* margin-right: 3px; */
        bottom: -0.1rem;
        left: 0rem;
        display: block;
        position: absolute;
        width: 3px;
        height: 1.2rem;
        transform: skewX(-20deg);
        background-color: ${props => props.color};
        z-index: -1;
    }

    &:hover{
        /* color: ${colors.bgDark}; */
        animation: ${hover_text} .5s forwards;

        &::before{
            /* width: 125%; */
            animation: ${hover_nav} .5s forwards;
        }
    }
`;




export const LogoItem = styled.a`
    width: min-content;
    height: min-content;
`;



//https://medium.com/@emmilindsey/react-router-hashlink-vs-link-e1e7a81bac1d