import speech_recognition as sr
import pywhisper

def record_and_transcribe():
    recognizer = sr.Recognizer()
    audio_file = "query_audio.wav"  # Store the audio as a .wav file

    with sr.Microphone() as source:
        print("Listening... Speak your query.")
        audio = recognizer.listen(source)

    # Save the audio to a file
    with open(audio_file, "wb") as f:
        f.write(audio.get_wav_data())

    print("Transcribing audio...")
    model = pywhisper.load_model("base")  
    result = model.transcribe(audio_file)

    print(f"Transcribed Text: {result['text']}")
    return result['text']