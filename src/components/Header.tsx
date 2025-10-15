// src/components/Header.tsx
import React from 'react';
import LangSwitch from './LangSwitch';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="header-inner">
        <h1>EX Corp</h1>
        <div className="nav-bar-right">
          <nav>
            <Link to="/">{t('header.top')}</Link> |{' '}
            <HLink smooth to="/#about-section">{t('header.about')}</HLink> |{' '}
            <Link to="/staff">{t('header.staff')}</Link> |{' '}
            <HLink smooth to="/#media-section">{t('header.media')}</HLink> |{' '}
            <HLink smooth to="/#contact-section">{t('header.contact')}</HLink>
          </nav>
          <LangSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;
