import React from 'react';

const Home = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      textAlign: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      marginBottom:'50px',
      backgroundColor: '#4A8670', // Teal background
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '2.2em',
      color: 'white',
      marginBottom: '20px',
    },
    featureRow: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap', // Allows wrapping if the screen is too small
      gap: '20px',
      marginTop: '20px',
    },
    featureCard: {
      flex: '1 1 250px',
      backgroundColor: '#f7f7f7',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      maxWidth: '250px',
    },
    featureTitle: {
      fontSize: '1.5em',
      color: '#333',
      marginBottom: '10px',
    },
    description: {
      fontSize: '1.1em',
      color: '#555',
      marginBottom: '15px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1em',
      color: 'white',
      backgroundColor: '#4A8670',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    languageSection: {
      backgroundColor: '#f0f0f0',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '20px',
    },
    languageSelect: {
      fontSize: '1em',
      padding: '8px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Title Section */}
      <h1 style={styles.title}>Welcome to Your Health Assistant</h1>

      {/* Features Row */}
      <div style={styles.featureRow}>
        <section style={styles.featureCard}>
          <h2 style={styles.featureTitle}>Ask Health-Related Questions</h2>
          <p style={styles.description}>
            Have a question about your health? Get clear answers and advice to help you stay informed and proactive.
          </p>
          <button style={styles.button}>Ask a Question</button>
        </section>

        <section style={styles.featureCard}>
          <h2 style={styles.featureTitle}>View Your Reminders</h2>
          <p style={styles.description}>
            Never miss a dose or an important task. Access all your reminders to keep on track with your health goals.
          </p>
          <button style={styles.button}>View Reminders</button>
        </section>

        <section style={styles.featureCard}>
          <h2 style={styles.featureTitle}>Access Your Health Journal</h2>
          <p style={styles.description}>
            Record and review your health progress over time. Your journal helps you keep track of daily insights and milestones.
          </p>
          <button style={styles.button}>Open Journal</button>
        </section>
      </div>

      {/* Language Selection Section */}
      <section style={styles.languageSection}>
        <h3 style={{ fontSize: '1.3em', color: '#333' }}>Select Your Preferred Language</h3>
        <select style={styles.languageSelect} aria-label="Select your preferred language">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="hi">Hindi</option>
        </select>
      </section>
    </div>
  );
};

export default Home;
