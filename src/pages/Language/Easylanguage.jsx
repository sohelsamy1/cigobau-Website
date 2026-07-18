import React from 'react';
import './EasyLanguage.css';

const EasyLanguage = () => {
  return (
    <div className="easy-language-page container py-5">
      {/* হেডার টেক্সট */}
      <div className="header-section mb-5">
        <h1 className="mb-4">Leichte Sprache</h1>
        <p>Willkommen bei Cigo Bau GmbH</p>
        <p>Wir sind Ihr Partner für den Roh- & Hochbau</p>
        <p>Jetzt gibt es die wichtigsten Infos über uns auch in Leichter Sprache und Gebärden-Sprache.</p>
        <p>Wähle unten ein Thema aus.</p>
        <p>Klicke mit der Maus auf die Überschrift.</p>
        <p>Dann kommst du auf eine Seite mit Infos über das Thema.</p>
      </div>

      {/* কার্ড সেকশন */}
      <div className="row">
        {/* কার্ড ১ */}
        <div className="col-md-6 mb-4">
          <div className="info-card">
            <img src="/path-to-your-image1.jpg" alt="Barrierefreiheit" className="card-img-top" />
            <div className="card-body">
              <h3>Erklärung zur Barriere-Freiheit</h3>
              <p>Die wichtigsten Infos in Leichter Sprache zur Barriere-Freiheit. Hier findest du unsere wichtigsten Barrieren.</p>
            </div>
          </div>
        </div>

        {/* কার্ড ২ */}
        <div className="col-md-6 mb-4">
          <div className="info-card">
            <img src="/path-to-your-image2.jpg" alt="Gebärdensprache" className="card-img-top" />
            <div className="card-body">
              <h3>Gebärdensprache</h3>
              <p>Hier gibt es alle Informationen in Gebärden-Sprache.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyLanguage;