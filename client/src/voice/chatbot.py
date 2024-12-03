from transformers import AutoModelForCausalLM, AutoTokenizer
from render import render_prompt
import re


import time
start_time = time.time()


TOKEN = "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" # ik

# Load the model and tokenizer once
model = AutoModelForCausalLM.from_pretrained("microsoft/phi-1_5", token=TOKEN)
tokenizer = AutoTokenizer.from_pretrained("microsoft/phi-1_5", token=TOKEN)

print(f"Model loaded in {time.time() - start_time} seconds.")

def generate_llm_response(transcription, emotion, confidence):
    """
    Generate a response using the LLM based on the transcription and emotion.
    """
    # # Define the context for the template
    # context = {
    #     "transcription": transcription,
    #     "emotion": emotion,
    #     "confidence": confidence
    # }

    # # Render the prompt using the template
    # prompt = render_prompt("llm_prompt.jinja2", context)
    # print(prompt)

    prompt = f"""
    [INSTRUCT]: You are a health assistant for senior citizens. The user will ask you queries about their health, both physical and mental. Respond like a health care professional and keep in mind to not give medical advice. Just answer their questions. Respond only with a comforting and useful response, starting with '[RESPONSE]:' and ending with '[END]:' . Do not include any explanations or additional text. Please provide only a human-like response, and make sure to finish your response with '[END]:'.

    User's Input: "{transcription}"
    Detected Emotion: {emotion} (Confidence: {confidence})

    [RESPONSE]:
    """

    # Tokenize input and generate response
    inputs = tokenizer(prompt, return_tensors="pt")
    #print("Tokenized Inputs:", inputs)  # Check tokenized inputs
    
    outputs = model.generate(**inputs, max_new_tokens=100)
    #print("Model Outputs:", outputs)  # Check raw output logits
    
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    #print("Decoded Response:", response)  # Check the final decoded response
    if not response.endswith("[END]:"):
        response += "[END]:"

    #print(response, "RESPONSE_LOLOLOLOLOLOLOLOL")
    
    pattern = r'(?<=\[RESPONSE\]:)(.*?)(?=\[END\]:)'
    
    # Find all matches
    matches = re.findall(pattern, response, re.DOTALL)
    
    # Return the second match (if it exists)
    if len(matches) > 1:
        return matches[1].strip()
    else:
        return("error in model")

    return extracted_response

