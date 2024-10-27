import React, { useState } from 'react';

export const VoiceRecorder = () => {
  const [transcription, setTranscription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRecordAndTranscribe = async () => {
    setLoading(true); // doesn't time out hopefully
    setError('');
    setTranscription('');

    try {
        const response = await fetch('http://localhost:5000/transcribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

      const data = await response.json();

      if (response.ok) {
        setTranscription(data.transcription);
      } else {
        setError(`Error: ${data.error}`);
      }
    } catch (err) {
      setError('Failed to connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <button onClick={handleRecordAndTranscribe} style={styles.button} disabled={loading}>
        {loading ? 'Recording...' : 'Record Voice'}
      </button>
      <div style={styles.result}>
        {error && <p style={styles.error}>{error}</p>}
        {transcription && <p>Transcription: {transcription}</p>}
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

