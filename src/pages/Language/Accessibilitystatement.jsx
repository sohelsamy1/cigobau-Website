import React from 'react';
import './Accessibilitystatement.css';

const Accessibilitystatement = () => {
  return (
    <div className="accessibility-page container py-5">
      <div className="content-section">
        <h1 className="mb-4">Erklärung zur Barriere-Freiheit</h1>
        <h3>Die wichtigsten Infos in Leichter Sprache</h3>
        <p>Diese Internet-Seite ist nur teilweise barriere-frei.</p>
        <p>Wir erfüllen die Anforderungen aus der BITV 2.0 nur zum Teil.</p>
        <p>Die BITV 2.0 sind Regeln für Barriere-Freiheit im Internet.</p>
        <p>Hier beschreiben wir unsere wichtigsten Barrieren.</p>

        <h2 className="mt-4">Bedien-Elemente</h2>
        <p>Einige Bedien-Elemente haben keinen Alternativ-Text.</p>
        <p>Bedien-Elemente sind zum Beispiel Logos oder Bilder zum Anklicken.</p>
        <p>Der Alternativ-Text sagt: dafür ist das Logo oder Bild.</p>
        <p>Und wohin man kommt, wenn man auf das Logo klickt.</p>
        <p>Alternativ-Texte sind für Menschen mit Seh-Behinderung.</p>

        <h2 className="mt-4">Überschriften</h2>
        <p>Einige Überschriften sind einfach nur fett markierter Text.</p>
        <p>Überschriften sollen nicht einfach nur fett markiert werden.</p>
        <p>Dann erkennen es Lese-Geräte für Blinde nicht als Überschriften.</p>
        <p>Man muss Überschriften mit dem Text-Programm machen.</p>
      </div>
    </div>
  );
};

export default Accessibilitystatement;