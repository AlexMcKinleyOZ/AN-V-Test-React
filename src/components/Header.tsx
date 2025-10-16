// src/components/Header.tsx
import React from 'react';
import LangSwitch from './LangSwitch';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const handleTopClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we're already on the top page, prevent navigation and scroll to top
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="header-inner">
        <h1 className='header-logo'>X Corp.</h1>
        <div className="nav-bar-right">
          <nav>
            <Link to="/" onClick={handleTopClick}>{t('header.top')}</Link> |{' '}
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
