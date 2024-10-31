import React from "react";
import { Login } from "./views/login";
import Home from "./views/home"; 
import { Signup } from "./views/signup";
import { Journal } from "./views/journal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainView from "./views/MainView";
import Navbar from "./views/components/Navbar";

import { LandingPage } from "./views/landingPage";
import { VoiceRecorder } from "./views/voiceRecorder";


export const App = () => {
	return (
		// code below displays login and sign up page, you can call it like so when you want to render it
		<div>
    
		<h1>Welcome to CS555 Team 16</h1>
		<VoiceRecorder />
		<LandingPage />
		{/* <Home/> */}
		<Login />
		<Signup />
		
		
  
		  {/* <Router>
			  <Navbar />
			  <Routes>
			  	  
				  <Route path="/" element={<MainView />} />
				  <Route path="/home" element={<Home />} />	
				  <Route path="/login" element={<Login />} />
				  <Route path="/signup" element={<Signup />} />
				  <Route path="/journal" element={<Journal />} />
			  </Routes>
		  </Router> */}
	  </div>
	);
};
