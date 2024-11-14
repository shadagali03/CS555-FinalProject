from transformers import pipeline

emotion_classifier = pipeline("text-classification", model="j-hartmann/emotion-english-distilroberta-base")

def emotion_analysis(text):
    emotions = emotion_classifier(text)
    return emotions
