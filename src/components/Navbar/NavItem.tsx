import colors from "../../styles/colors";
import styled from "styled-components";

export const Item = styled.a`
    position: relative;
    display: flex;
    cursor: pointer;
    color: ${colors.fgDark};
    font-weight:600;
    font-family: "Lexend";
    padding: 0;
    margin:0 1rem;
    z-index:0;
    transition: width 1s ease-in-out;
    -webkit-transition: width 1s ease-in-out;
    -moz-transition: width 1s ease-in-out;
    -o-transition: width 1s ease-in-out;
    
    &::before{
        content: "";
        /* margin-right: 3px; */
        bottom: -0.1rem;
        left: -0.4rem;
        display: block;
        position: absolute;
        width: 3px;
        height: 100%;
        transform: skewX(-20deg);
        background-color: ${props => props.color};
        z-index: -1;
    }

    &:hover{
        color: ${colors.bgDark};

        &::before{
            width: 125%;
        }
    }
`;

export const LogoItem = styled.a`
    width: min-content;
    height: min-content;
`;



//https://medium.com/@emmilindsey/react-router-hashlink-vs-link-e1e7a81bac1d