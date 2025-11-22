import React from "react";
import { useTranslation } from "react-i18next";

const LanguageChanger = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      value={i18n.language}
      style={{
        background: "#241c33",
        color: "white",
        border: "1px solid #3b2d4d",
        borderRadius: "4px",
        padding: "3px 6px",
        fontSize: "12px",
        cursor: "pointer",
      }}
    >
      <option value="en">EN</option>
      <option value="fr">FR</option>
      <option value="es">ES</option>
      <option value="de">DE</option>
      <option value="pt">PT</option>
      <option value="ar">AR</option>
    </select>
  );
};

export default LanguageChanger;
