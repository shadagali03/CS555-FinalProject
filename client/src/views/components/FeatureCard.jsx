// FeatureCard.js
import React from 'react';
import '../../styles/home.css';

const FeatureCard = ({ title, description, buttonText }) => (
  <section className="featureCard">
    <h2 className="featureTitle">{title}</h2>
    <p className="description">{description}</p>
    <button className="button">{buttonText}</button>
  </section>
);

export default FeatureCard;
