from flask import Flask, jsonify, request, Response
from flask_cors import CORS
from record_and_transcribe import record_and_transcribe
from insights import emotion_analysis
#from streamingText import generate_transcription_chunks
import json
from datetime import datetime
import logging
from chatbot import generate_llm_response
logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
CORS(app) 

FILE_PATH= "transcriptions.txt"

def save_transcription(transcription_data):
    try:
        with open(FILE_PATH, 'a') as file:
            json.dump(transcription_data, file)
            file.write('\n')
        logging.info("Successfully saved transcription data.")
    except Exception as e:
        logging.error(f"Failed to save transcription data: {str(e)}")


@app.route('/transcribe', methods=['POST'])
def transcribe():
    try:
        transcription = record_and_transcribe()
        print(f"Transcription: {transcription}") 
        insights = emotion_analysis(transcription)
        print(f"Insights: {insights}")  

        emotion = insights[0]['label']
        confidence = insights[0]['score']  
        llm_response = generate_llm_response(transcription, emotion, confidence)
        #print(f"LLM Response: {llm_response}")


        transcription_data = { # format look good? idk
            "timestamp": datetime.now().isoformat(),
            "transcription": transcription,
            # "interpretation": insights[0], making below more convoluted ??
            "emotion": {
                "label": emotion,
                "score": confidence
            },
            "response": llm_response
        }
        save_transcription(transcription_data)

        return jsonify({
            "llm_response": llm_response,
            "transcription": transcription,
            "interpretation": insights[0]
        }), 200
    except Exception as e:
        logging.error(f"Error in /transcribe endpoint: {str(e)}")  
        return jsonify({
            "error": str(e)
        }), 5


# @app.route('/stream_transcription', methods=['GET'])
# def stream_transcription()  :
#     return Response(generate_transcription_chunks(), mimetype='text/event-stream')

if __name__ == '__main__':
    app.run(port=5000)
