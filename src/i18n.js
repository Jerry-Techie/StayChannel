import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../src/lang/en.json";
import fr from "/src/lang/fr.json";
import es from "/src/lang/es.json";
import de from "/src/lang/de.json";
import pt from "/src/lang/pt.json";
import ar from "/src/lang/ar.json"; 

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      es: { translation: es },
      de: { translation: de },
      pt: { translation: pt },
      ar: { translation: ar }
    },
    lng: "es", 
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
