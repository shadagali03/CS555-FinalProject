import unittest
import os
from client.src.voice.voiceRecorder import recordVoice
from client.src.voice.voice import transcribeText

class TestCases(unittest.TestCase):
    def test_record_voice(self):
        output_file = "test_Recorded.wav"
        if os.path.exists(output_file):
            os.remove(output_file)  
        
        recordVoice()
        self.assertTrue(os.path.exists(output_file))
        print('test case 1 passed')

    def test_transcribe_text(self):
        result = transcribeText()
        print(result)
        self.assertIsInstance(result, str)
        self.assertTrue(len(result) > 0)
        print('test case 2 passed')

def main(): 
    unittest.main()

if __name__ == "__main__":
    main()