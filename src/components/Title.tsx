import styled from "styled-components"
import Translator from "./i18n/Translator";
import colors from "../styles/colors";

export default function Title({title}:{title:string}){
    return (
        <PageTitle><Translator path={title}/></PageTitle>
    )
}

const PageTitle = styled.h1`
    width: 100%;
    height:max-content;
    display:flex;
    align-items:center;
    padding:0;
    margin:0;
    column-gap:0.5rem;
    font-size:1.2rem;

    &::after{
        content:"";
        display:block;        
        width: 100%;
        height: 2px;
        background-color: ${colors.fgGray};
    }
`;