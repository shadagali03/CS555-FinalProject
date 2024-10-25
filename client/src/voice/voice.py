import pywhisper
import os


def transcribeText():
    # transcribes text from recorded voice 
    audio_file = "test_Recorded.wav"

    if not os.path.exists(audio_file):
        raise FileNotFoundError(f"{audio_file} does not exist.")
    

    model = pywhisper.load_model("base")
    result = model.transcribe(audio_file)


    print(result["text"])
    return result["text"]
