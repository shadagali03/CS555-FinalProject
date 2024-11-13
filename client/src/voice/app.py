from flask import Flask, jsonify, request, Response
from flask_cors import CORS
from record_and_transcribe import record_and_transcribe
from insights import emotion_analysis
from streamingText import generate_transcription_chunks
import logging
logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
CORS(app) 

@app.route('/transcribe', methods=['POST'])
def transcribe():
    try:
        transcription = record_and_transcribe()
        print(f"Transcription: {transcription}")  # Debugging
        insights = emotion_analysis(transcription)
        print(f"Insights: {insights}")  # Debugging
        return jsonify({
            "transcription": transcription,
            "interpretation": insights[0]
        }), 200
    except Exception as e:
        logging.error(f"Error in /transcribe endpoint: {str(e)}")  # Error Logging
        return jsonify({
            "error": str(e)
        }), 5


@app.route('/stream_transcription', methods=['GET'])
def stream_transcription()  :
    return Response(generate_transcription_chunks(), mimetype='text/event-stream')

if __name__ == '__main__':
    app.run(port=5000)
