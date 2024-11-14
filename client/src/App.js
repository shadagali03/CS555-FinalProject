import React from "react";
import { Login } from "./views/login";
import Home from "./views/home";
import { Signup } from "./views/signup";
import { Journal } from "./views/journal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainView from "./views/MainView";
import Navbar from "./views/components/Navbar";
<<<<<<< HEAD
import UserProfile from "./views/userProfile";
=======
import { VoiceRecorder } from "./views/voiceRecorder";
>>>>>>> fa90a78cab85439f0b9dd5255af564d1d998e986

export const App = () => {
  return (
    // code below displays login and sign up page, you can call it like so when you want to render it
    <div>
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<MainView />} />
          <Route path='voiceRecorder' element={<VoiceRecorder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/userProfile" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
};
