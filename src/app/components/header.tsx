import { useTranslation } from 'react-i18next';
import { languageData } from '../data/data';


const Header = () => {
  const { i18n } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <header className='flex justify-between items-center p-2' style={{ background: '#01114A' }}>
    <div></div> {/* Espacio vacío */}
      <select
      defaultValue={i18n.language}
      onChange={onChangeLang}
      className='block px-3 py-2 text-app-gray-black bg-app-white border rounded-lg focus:border-app-primary focus:ring-app-primary'
      >
      {languageData().map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
      </select>
    </header>
    
  );

};

export default Header;