import { useTranslation } from "react-i18next";
import styled from "styled-components";
// import colors from "../../styles/colors";

import BRFlag from '../../assets/images/br.svg';
import USFlag from '../../assets/images/us.svg';

// type LangStyle = {
//     selected: boolean
// }

export default function I18n() {
    const { i18n } = useTranslation();

    function handleLanguage(lang: string) {
        i18n.changeLanguage(lang)
    }

    const selectedLang = i18n.language;
    console.log("🚀 ~ I18n ~ selectedLang:", selectedLang)

    return (
        <>
            {/* <LangOpt selected={selectedLang == "en-US"} onClick={() => handleLanguage("en-US")}>enUS</LangOpt>
            <LangOpt selected={selectedLang == "pt-BR"} onClick={() => handleLanguage("pt-BR")}>ptBR</LangOpt> */}

            <LangFlag 
                src={selectedLang == "pt-BR" ? BRFlag : USFlag}
                onClick={() => selectedLang == "pt-BR" ? handleLanguage("en-US") : handleLanguage("pt-BR")}/>
        </>

    )
}


const LangFlag = styled.img`
    border-radius: 10rem;
    width:1rem;
    height:1rem;
    cursor: pointer;
`;

// const LangOpt = styled.p<LangStyle>`
//     font-size: 0.8rem;
//     cursor: pointer;
//     color: ${props => props.selected ? colors.fgDark : colors.fgGray};
//     margin: 0;
//     padding: 0;
//     display: flex;
//     flex-direction: row-reverse;
//     align-items: center;
//     justify-content: center;
//     /* column-gap:0.3rem; */
//     opacity:0.8;

//     &::before{
//         content: "";
//         display: ${props => props.selected ? "block" : "none"};
//         width: 4px;
//         height: 4px;
//         border-radius: 10rem;
//         background-color: ${colors.fgDark};
//         margin:0;
//         padding:0;
//     }
// `;