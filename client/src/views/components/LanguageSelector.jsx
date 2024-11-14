// LanguageSelector.js
import React from 'react';
import '../../styles/home.css';

const LanguageSelector = () => (
  <section className="languageSection">
    <h3 className="languageTitle">Select Your Preferred Language</h3>
    <select className="languageSelect" aria-label="Select your preferred language">
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
      <option value="de">German</option>
      <option value="hi">Hindi</option>
    </select>
  </section>
);

export default LanguageSelector;
