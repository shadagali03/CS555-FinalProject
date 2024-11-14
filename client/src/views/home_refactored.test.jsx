import { render, screen } from '@testing-library/react';
import Home from './home';

test('renders the Home component correctly', () => {
  render(<Home />);
  
  const titleElement = screen.getByText(/Welcome to Your Health Assistant/i);
  expect(titleElement).toBeInTheDocument();

  const featureTitle1 = screen.getByText(/Ask Health-Related Questions/i);
  const languageSelect = screen.getByLabelText(/Select your preferred language/i);
  expect(featureTitle1).toBeInTheDocument();
  expect(languageSelect).toBeInTheDocument();
});
