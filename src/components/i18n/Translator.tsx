import { useTranslation } from 'react-i18next'

const Translator = ({ path }: { path: string }) => {
  const { t } = useTranslation();
  const translatedText = t(path);
  console.log("🚀 ~ Translator ~ translatedText:", translatedText)

  return <div dangerouslySetInnerHTML={{ __html: translatedText }} />;
};
export default Translator