import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Xlogo from '/src/components/Xlogo';
import StaffGrid from '/src/components/StaffGrid';
import ContactSection from '/src/components/ContactSection';
import staffData from '/src/data/staff.json';



const TopPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="top-page">
      <header>
      </header>

      <div className="kv">
        <div className="kv-left-box">
          <video className="kv-video" autoPlay muted loop>
            <source src="kv-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="kv-overlay" />
          <h1 className="kv-title">{t('top.title')}</h1>
          <p className='kv-text'>{t('top.text')}</p>
        </div>
        <div className="kv-right-box">
        </div>
        <Xlogo />
      </div>

      <section className="about" id="about-section">
        <div className='container'>
          <h2 className="section-title">{t('top.about-title')}</h2>
          <p className="u-big-text about-text-a">{t('top.about-text-a')}</p>
          <p className="u-big-text about-text-b">{t('top.about-text-b')}</p>
        </div>
      </section>

      <section className="staff">
        <video className="staff-video" autoPlay muted loop>
          <source src="staff-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="staff-overlay" />
        <div className="container staff-container">
          <div className="side-a">
            <h2 className="section-title">{t('top.staff-title')}</h2>
            <p className='u-med-text'>{t('top.staff-text')}</p>
            <Link className="m-button" to="/staff">{t('top.staff-button')}</Link>
          </div>
          <div className="side-b top-page-staff">
            <StaffGrid staffMembers={staffData} />
          </div>

        </div>

      </section>

      <section className="media" id="media-section">
        <div className="title-row">
          <h2 className="media-text u-huge-text">{t('top.media-title-a')}</h2>
          <img className="title-row-img" src='media-01.jpeg'></img>
          <h2 className="media-text u-huge-text">{t('top.media-title-b')}</h2>
        </div>
        <div className="title-row">
          <img className="title-row-img" src='media-02.jpeg'></img>
          <h2 className="media-text u-huge-text">{t('top.media-title-c')}</h2>
          <img className="title-row-img" src='media-03.jpeg'></img>
        </div>
        <div className="title-row">
          <h2 className="media-text u-huge-text">{t('top.media-title-d')}</h2>
        </div>
        <div className="media-pair">
          <div className="side-a">
            <h3 className="u-med-text">{t('top.media-announcements')}</h3>
            <Link className="m-button" to="/articlesA">{t('top.media-button')}</Link>
          </div>
          <div className="side-b">
            <h3 className="u-med-text">{t('top.media-featured')}</h3>
            <Link className="m-button" to="/articlesB">{t('top.media-button')}</Link>
          </div>
        </div>
      </section>
        <ContactSection></ContactSection>
    </div>
  );
};

export default TopPage;
