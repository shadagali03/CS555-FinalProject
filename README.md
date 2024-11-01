# Voice Assistant for Seniors

## Main Objective of the Project

The project focuses on developing a voice assistant specifically tailored for seniors, aiming to promote healthy behaviors and provide essential health-related reminders. The voice assistant offers a seamless interface for seniors to interact with, allowing them to ask health-related questions and receive accurate responses.

This tool is designed to help seniors manage their daily activities, such as:

- Walking
- Checking blood pressure
- Taking medication

The assistant provides timely voice reminders to support these activities. By utilizing speech as the primary mode of interaction, the assistant is simple and intuitive, catering to the needs of older users who may struggle with more complex technology.

### Inclusivity and Accessibility

The project emphasizes **multi-language support** to cater to a diverse group of seniors from different linguistic backgrounds. The voice assistant guarantees inclusivity by offering reminders and health information in multiple languages.

The system is also equipped with:

- Data storage for tracking interactions and performance
- Robust error-handling mechanisms for a smooth experience

Ultimately, the project focuses on improving seniors' quality of life by making it easier for them to manage their health, stay active, and adhere to important health routines.

---

## Core Features

- **Voice Interaction**: Allows seniors to ask health-related queries and receive accurate responses.
- **Voice Data Recording**: Tracks and optimizes user interactions via Language Learning Models (LLM).
- **Reminders**: Sends reminders for healthy behaviors like walking, checking blood pressure, and taking medication.
- **Multi-Language Support**: Ensures accessibility for seniors from diverse backgrounds.
- **Ease of Use**: Provides error-handling features for a smooth user experience.

---

## Additional Features and Creative Ideas

- **Voice-Controlled Health Journal and Insights**:

  - Users can maintain a daily voice-recorded health journal.
  - Seniors can record how they feel each day, any symptoms they’re experiencing, or notable health changes.

- **Streaks**:
  - Positive reinforcement is provided through streaks, encouraging users to maintain healthy habits.

---

## How to Run the Project

### Prerequisites

- Node.js and npm installed
- MongoDB running locally or accessible remotely

### Backend (Express)

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file with necessary configurations (e.g., MongoDB connection string).

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend (React)

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the frontend server:
   ```bash
   npm start
   ```

The application should now be running with the frontend available on `http://localhost:3000` and the backend on `http://localhost:3001` (or whichever port you specify).
