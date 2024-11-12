import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { VoiceRecorder } from './voiceRecorder';

global.fetch = jest.fn();

describe('VoiceRecorder Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders the Record Voice button', () => {
    render(<VoiceRecorder />);
    expect(screen.getByText('Record Voice')).toBeInTheDocument();
  });

  test('displays loading state when recording starts', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ transcription: 'Test transcription', interpretation: { polarity: 0.5, subjectivity: 0.7 } })
    });

    render(<VoiceRecorder />);
    const button = screen.getByText('Record Voice');
    fireEvent.click(button);

    expect(screen.getByText('Recording...')).toBeInTheDocument();
  });

  test('displays transcription and interpretation after successful response', async () => {
    const mockResponse = {
      transcription: 'Test transcription',
      interpretation: { polarity: 0.5, subjectivity: 0.7 }
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    render(<VoiceRecorder />);
    const button = screen.getByText('Record Voice');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Transcription: Test transcription')).toBeInTheDocument();
      expect(screen.getByText(/Interpretation: Polarity: 0.5, Subjectivity: 0.7/i)).toBeInTheDocument();
    });
  });

  test('displays error message if API returns an error', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'API error occurred' }),
    });

    render(<VoiceRecorder />);
    const button = screen.getByText('Record Voice');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/Error: API error occurred/i)).toBeInTheDocument();
    });
  });

  test('displays error message if fetch fails', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    render(<VoiceRecorder />);
    const button = screen.getByText('Record Voice');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Failed to connect to the server.')).toBeInTheDocument();
    });
  });

  test('disables button when loading', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ transcription: 'Test transcription', interpretation: { polarity: 0.5, subjectivity: 0.7 } })
    });

    render(<VoiceRecorder />);
    const button = screen.getByText('Record Voice');
    fireEvent.click(button);

    expect(button).toBeDisabled();
  });

  test('re-enables button after transcription completes', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ transcription: 'Test transcription', interpretation: { polarity: 0.5, subjectivity: 0.7 } })
    });

    render(<VoiceRecorder />);
    const button = screen.getByText('Record Voice');
    fireEvent.click(button);

    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });
  });
});
