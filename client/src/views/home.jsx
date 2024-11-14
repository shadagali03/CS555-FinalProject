// Home.js
import React from 'react';
import "../styles/home.css";
import FeatureCard from './components/FeatureCard';
import LanguageSelector from './components/LanguageSelector';

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to Your Health Assistant</h1>

      <div className="featureRow">
        <FeatureCard
          title="Ask Health-Related Questions"
          description="Have a question about your health? Get clear answers and advice to help you stay informed and proactive."
          buttonText="Ask a Question"
        />
        <FeatureCard
          title="View Your Reminders"
          description="Never miss a dose or an important task. Access all your reminders to keep on track with your health goals."
          buttonText="View Reminders"
        />
        <FeatureCard
          title="Access Your Health Journal"
          description="Record and review your health progress over time. Your journal helps you keep track of daily insights and milestones."
          buttonText="Open Journal"
        />
      </div>

      <LanguageSelector />
    </div>
  );
};

export default Home;
