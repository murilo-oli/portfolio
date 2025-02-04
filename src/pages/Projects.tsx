import Translator from "../components/i18n/Translator";
import Title from "../components/Title";

export default function Projects() {
    return (
        <>
            <Title title="titles.proj"/>
            <p><Translator path="generics.onBuilding"/></p>
        </>
    );
}