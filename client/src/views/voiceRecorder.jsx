import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export const VoiceRecorder = () => {
  const [transcription, setTranscription] = useState('');
  const [interpretation, setInterpretation] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRecordAndTranscribe = async () => {
    resetStates(); // extract it into a function, so we can reuse it later
    setLoading(true);

    try {
      const response = await fetchTranscription();
      const data = await response.json();

      if (response.ok) {
        setTranscription(data.transcription);
        setInterpretation(data.interpretation);
      } else {
        setError(`Error: ${data.error}`);
      }
    } catch (err) {
      setError('Failed to connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  const resetStates = () => {
    setError('');
    setTranscription('');
    setInterpretation({});
  };

  const fetchTranscription = () => { // extract function
    return fetch('http://localhost:5000/transcribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  };

  return (
    <div style={styles.container}>
      <button onClick={handleRecordAndTranscribe} style={styles.button} disabled={loading}>
        {loading ? 'Recording...' : 'Record Voice'}
      </button>
      <div style={styles.result}>
        {error && <p style={styles.error}>{error}</p>}
        {transcription && <p>Transcription: {transcription}</p>}
        {interpretation.polarity !== undefined && (
          <p>
            Interpretation: Polarity: {interpretation.polarity}, Subjectivity: {interpretation.subjectivity}
          </p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  result: {
    marginTop: '20px',
  },
  error: {
    color: 'red',
  },
};
