import unittest
import os
from unittest.mock import patch, MagicMock, mock_open
from flask import Flask
from app import app  # Importing the Flask app
from record_and_transcribe import record_and_transcribe

# using mock open and testing endpoints with this:
# https://opensource.com/article/21/9/unit-test-python

class TestAudioApp(unittest.TestCase):

    def test_transcribe_endpoint_success(self):
            with app.test_client() as client:
                with patch('app.record_and_transcribe', return_value="Endpoint running"):
                    response = client.post('/transcribe')
                    self.assertEqual(response.status_code, 200)
                    self.assertIn("transcription", response.json)
                    self.assertTrue(response.json["transcription"])


    def test_transcribe_endpoint_failure(self):
        with app.test_client() as client:
            with patch('app.record_and_transcribe', side_effect=Exception("we got error")):
                response = client.post('/transcribe')
                self.assertEqual(response.status_code, 500)
                self.assertIn("error", response.json)
                self.assertEqual(response.json["error"], "we got error")


    def test_flask_endpoint_online(self):
            with app.test_client() as client:
                response = client.get('/')  
                self.assertIn(response.status_code, [200, 404], "app not running")


if __name__ == '__main__':
    unittest.main()