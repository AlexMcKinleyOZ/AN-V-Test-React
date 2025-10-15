import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const TopPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="top-page">
      <header>
      </header>

      <section className="kv">
        <h1>{t('top.title')}</h1>
      </section>

      <section className="about" id="about-section">
        <p>{t('top.description')}</p>
      </section>

      <section className="staff">
        <h2>{t('top.staff-title')}</h2>

            <Link to="/staff">{t('top.staff')}</Link>

      </section>

      <section className="media" id="media-section">
        <h2>{t('top.media-title')}</h2>

            <Link to="/articlesA">{t('top.articlesA')}</Link>
            <Link to="/articlesB">{t('top.articlesB')}</Link>

      </section>

      <section className="contact" id="contact-section">
        <h2>{t('top.contact-title')}</h2>

            <Link to="/">{t('top.staff')}</Link>

      </section>

    </div>
  );
};

export default TopPage;
