import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Journal from './views/journal';

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

describe("Journal Component", () => {
  test("renders sidebar with sections", () => {
    render(<Journal />);
    expect(screen.getByText("Health Journal")).toBeInTheDocument();
    expect(screen.getByText("Entries")).toBeInTheDocument();
    expect(screen.getByText("Goals")).toBeInTheDocument();
    expect(screen.getByText("Reminders")).toBeInTheDocument();
  });

  test("renders Entries section by default", () => {
    render(<Journal />);
    expect(screen.getByText("Journal Entries")).toBeInTheDocument();
  });


  test("displays 'No entries yet' when there are no entries", () => {
    render(<Journal />);
    expect(
      screen.getByText("No entries yet. Start writing to keep track of your health!")
    ).toBeInTheDocument();
  });

  test("allows switching to Goals section", () => {
    render(<Journal />);
    fireEvent.click(screen.getByText("Goals"));
    expect(screen.getByText("Health Goals")).toBeInTheDocument();
  });

  test("allows adding a new goal", () => {
    render(<Journal />);
    fireEvent.click(screen.getByText("Goals"));
    const input = screen.getByPlaceholderText("Set a health goal...");
    const addButton = screen.getByText("Add Goal");

    fireEvent.change(input, { target: { value: "Exercise regularly" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Exercise regularly")).toBeInTheDocument();
  });

  test("displays 'No goals set yet' when there are no goals", () => {
    render(<Journal />);
    fireEvent.click(screen.getByText("Goals"));
    expect(
      screen.getByText("No goals set yet. Start adding goals to stay motivated!")
    ).toBeInTheDocument();
  });

  test("allows switching to Reminders section", () => {
    render(<Journal />);
    fireEvent.click(screen.getByText("Reminders"));
    expect(screen.getByText("Daily Reminders")).toBeInTheDocument();
  });

  test("allows adding a new reminder", () => {
    render(<Journal />);
    fireEvent.click(screen.getByText("Reminders"));
    const input = screen.getByPlaceholderText("Add a reminder...");
    const addButton = screen.getByText("Add Reminder");

    fireEvent.change(input, { target: { value: "Drink water" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Drink water")).toBeInTheDocument();
  });

  test("displays 'No reminders set yet' when there are no reminders", () => {
    render(<Journal />);
    fireEvent.click(screen.getByText("Reminders"));
    expect(
      screen.getByText("No reminders set yet. Start adding reminders for daily tasks!")
    ).toBeInTheDocument();
  });
});