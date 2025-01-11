import {useTranslation} from "react-i18next";

export default function I18n() {
    const {i18n} = useTranslation();

    function handleLanguage(lang : string){
        i18n.changeLanguage(lang)
    }

    const selectedLang = i18n.language;

    return (
        <button
        onClick={() => {
            const lang : string = selectedLang == "pt-BR" ? "en-US" : "pt-BR";
            handleLanguage(lang)
        }}
        >change</button>
    )
}