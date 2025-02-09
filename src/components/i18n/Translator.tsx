import { useTranslation } from 'react-i18next'

const Translator = ({ path }: { path: string }) => {
  const { t } = useTranslation();
  const translatedText = t(path);

  return <div dangerouslySetInnerHTML={{ __html: translatedText }} />;
};
export default Translator