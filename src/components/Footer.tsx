// src/components/Footer.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <h1 className="u-med-text">{ t("footer.title")}</h1>
    </footer>
  );
};

export default Footer;