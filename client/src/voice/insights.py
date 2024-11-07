from textblob import TextBlob

def sentiment_analysis(text):
    blob = TextBlob(text)
    sentiment = blob.sentiment
    return {
        "polarity": sentiment.polarity,  
        "subjectivity": sentiment.subjectivity  
    }

# transcription = "But I'm also very sad because why isn't this working?"
# insights = sentiment_analysis(transcription)
# print(insights)
