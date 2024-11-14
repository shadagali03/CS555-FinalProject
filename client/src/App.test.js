import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';
import { Journal } from './views/journal';
import { MainView } from './views/MainView';

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

describe('MainView Component', () => {
  // Test if the hero section renders correctly
  it('renders hero section with title and description', () => {
    render(<MainView />);
    const titleElement = screen.getByText(/Your Health Companion for Better Living/i);
    const descriptionElement = screen.getByText(/Helping you manage health with reminders, tracking, and language support./i);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  // Test if the "Get Started" button renders and can be clicked
  it('renders and handles "Get Started" button click', () => {
    render(<MainView />);
    const buttonElement = screen.getAllByRole('button', { name: /Get Started/i })[0];
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent(/Get Started/i);
  });

  // Test core features section
  it('renders core features with icons and descriptions', () => {
    render(<MainView />);
    const featuresTitle = screen.getByText(/Core Features/i);
    const featureItems = screen.getAllByRole('heading', { level: 3 });
    
    expect(featuresTitle).toBeInTheDocument();
    expect(featureItems).toHaveLength(4);
    
    const featureDescriptions = [
      'An easy-to-use assistant for health support.',
      'Reminders for activities like walking and medication.',
      'Accessible to people from diverse backgrounds.',
      'Record your health and mood daily with voice commands.',
    ];

    featureDescriptions.forEach(desc => {
      expect(screen.getByText(desc)).toBeInTheDocument();
    });
  });

  // Test FAQ section rendering
  it('renders FAQ section with questions and answers', () => {
    render(<MainView />);
    const faqTitle = screen.getByText(/Frequently Asked Questions/i);
    const faqQuestions = [
      /How does the voice assistant work?/i,
      /Can I change the language settings?/i,
      /Is the app free to use?/i,
    ];

    expect(faqTitle).toBeInTheDocument();
    faqQuestions.forEach(question => {
      expect(screen.getByText(question)).toBeInTheDocument();
    });
  });

  // Test contact section renders support information
  it('renders contact section with support information', () => {
    render(<MainView />);
    const contactTitle = screen.getByText(/Need Help?/i);
    const contactEmail = screen.getByText(/support@healthmate.com/i);
    const contactPhone = screen.getByText(/1-800-555-0199/i);

    expect(contactTitle).toBeInTheDocument();
    expect(contactEmail).toBeInTheDocument();
    expect(contactPhone).toBeInTheDocument();
  });

  // Test if footer "Get Started" button renders
  it('renders footer "Get Started" button', () => {
    render(<MainView />);
    const footerButton = screen.getAllByRole('button', { name: /Get Started/i })[1];
    expect(footerButton).toBeInTheDocument();
  });

  // Ensure accessibility: check if buttons are focusable
  it('ensures all buttons are focusable for accessibility', () => {
    render(<MainView />);
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      button.focus();
      expect(document.activeElement).toBe(button);
    });
  });
});