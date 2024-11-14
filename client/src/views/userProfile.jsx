import React, { useState } from 'react';
import '../styles/userProfile.css';

function UserProfile() {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    medicalConditions: '',
    medications: '',
    preferredContact: '',
    emergencyContact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., save to a database or local storage)
    console.log('Profile saved:', profile);
    alert('Your profile has been saved successfully!');
  };

  return (
    <div className="user-profile-container">
      <h1>Set Up Your Profile</h1>
      <p>Fill in your personal details and health information to receive personalized reminders.</p>

      <form className="user-profile-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Age:
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Medical Conditions:
          <textarea
            name="medicalConditions"
            value={profile.medicalConditions}
            onChange={handleChange}
            placeholder="e.g., Diabetes, Hypertension"
          />
        </label>

        <label>
          Medications:
          <textarea
            name="medications"
            value={profile.medications}
            onChange={handleChange}
            placeholder="e.g., Metformin, Lisinopril"
          />
        </label>

        <label>
          Preferred Contact Method:
          <input
            type="text"
            name="preferredContact"
            value={profile.preferredContact}
            onChange={handleChange}
            placeholder="e.g., Phone, Email"
          />
        </label>

        <label>
          Emergency Contact:
          <input
            type="text"
            name="emergencyContact"
            value={profile.emergencyContact}
            onChange={handleChange}
            placeholder="Name and phone number"
          />
        </label>

        <button type="submit" className="submit-button">Save Profile</button>
      </form>
    </div>
  );
}

export default UserProfile;
