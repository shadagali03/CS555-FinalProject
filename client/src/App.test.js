import { render, screen } from '@testing-library/react';
import App from './App'; // assuming App.js is the component we created

describe('Landing Page', () => {
  
  test('renders headline and button', () => {
    // Render the App component
    render(<App />);

    // Assert that the headline is present
    const headlineElement = screen.getByText(/Your Health Companion for Better Living/i);
    expect(headlineElement).toBeInTheDocument();

    // Assert that the "Get Started" button is present
    const buttonElement = screen.getAllByText(/Get Started/i);
    expect(buttonElement[0]).toBeInTheDocument();
  });

  test('renders all key features', () => {
    // Render the App component
    render(<App />);

    // Assert that each feature is present with the correct title and description
    const healthReminders = screen.getByText(/Health Reminders/i);
    expect(healthReminders).toBeInTheDocument();

    const multiLanguageSupport = screen.getByText(/Multi-language Support/i);
    expect(multiLanguageSupport).toBeInTheDocument();

    const trackHealth = screen.getAllByText(/Track Your Health/i);
    expect(trackHealth[0]).toBeInTheDocument();

    const healthJournal = screen.getByText(/Voice-Controlled Health Journal/i);
    expect(healthJournal).toBeInTheDocument();

    const streaks = screen.getByText(/Streaks/i);
    expect(streaks).toBeInTheDocument();
  });

});