import { render, screen } from '@testing-library/react';
import Home from './home';

test('renders the Home component correctly', () => {
  render(<Home />);
  
  const titleElement = screen.getByText(/Welcome to Your Health Assistant/i);
  expect(titleElement).toBeInTheDocument();

  const featureTitle1 = screen.getByText(/Ask Health-Related Questions/i);
  const featureTitle2 = screen.getByText(/View Your Reminders/i);
  const featureTitle3 = screen.getByText(/Access Your Health Journal/i);

  expect(featureTitle1).toBeInTheDocument();
  expect(featureTitle2).toBeInTheDocument();
  expect(featureTitle3).toBeInTheDocument();
  
  const languageSelect = screen.getByLabelText(/Select your preferred language/i);
  expect(languageSelect).toBeInTheDocument();
});
