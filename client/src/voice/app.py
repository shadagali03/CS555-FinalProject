from flask import Flask, jsonify, request
from flask_cors import CORS
from record_and_transcribe import record_and_transcribe
from insights import sentiment_analysis
# import speech_recognition as sr
# import pywhisper

app = Flask(__name__)
CORS(app) 

@app.route('/transcribe', methods=['POST'])
def transcribe():
    try:
        transcription = record_and_transcribe()
        insights = sentiment_analysis(transcription)
        return jsonify({
            "transcription": transcription,
            "interpretation": insights
        }), 200
    except Exception as e:
        return jsonify({
            "error": str(e)
            }), 500

if __name__ == '__main__':
    app.run(port=5000)
