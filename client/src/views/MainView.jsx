import React from "react";

export const MainView = () => {
	const handleGetStarted = () => {
		alert("Getting started with HealthMate!");
	};

	return (
		<main style={styles.container}>
			{/* Hero Section */}
			<section
				style={styles.heroSection}
				id="home"
				aria-labelledby="hero-header"
			>
				<h1 style={styles.headerText} id="hero-header">
					Your Health Companion for Better Living
				</h1>
				<p style={styles.description}>
					Helping you manage health with reminders, tracking, and language
					support.
				</p>
				<button
					style={styles.button}
					onClick={handleGetStarted}
					onKeyDown={(e) => {
						if (e.key === "Enter") handleGetStarted();
					}}
					aria-label="Get Started with HealthMate"
				>
					Get Started
				</button>
			</section>

			{/* Core Features Section */}
			<section
				style={styles.features}
				id="features"
				aria-labelledby="features-header"
			>
				<h2 style={styles.sectionHeader} id="features-header">
					Core Features
				</h2>
				<div style={styles.featuresGrid}>
					<div style={styles.featureItem}>
						<img
							src={`${process.env.PUBLIC_URL}/assistant.png`}
							alt="AI Voice Assistant icon representing personalized health support"
							style={styles.icon}
						/>
						<h3>AI Voice Assistant</h3>
						<p>An easy-to-use assistant for health support.</p>
					</div>
					<div style={styles.featureItem}>
						<img
							src={`${process.env.PUBLIC_URL}/reminder.png`}
							alt="Reminder icon symbolizing health reminders"
							style={styles.icon}
						/>
						<h3>Health Reminders</h3>
						<p>Reminders for activities like walking and medication.</p>
					</div>
					<div style={styles.featureItem}>
						<img
							src={`${process.env.PUBLIC_URL}/languages.png`}
							alt="Multi-language support icon"
							style={styles.icon}
						/>
						<h3>Multi-language Support</h3>
						<p>Accessible to people from diverse backgrounds.</p>
					</div>
					<div style={styles.featureItem}>
						<img
							src={`${process.env.PUBLIC_URL}/voicecontrol.png`}
							alt="Voice-controlled health journal icon"
							style={styles.icon}
						/>
						<h3>Health Journal</h3>
						<p>Record your health and mood daily.</p>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section
				style={styles.testimonials}
				id="testimonials"
				aria-labelledby="testimonials-header"
			>
				<h2 style={styles.sectionHeader} id="testimonials-header">
					What Our Users Say
				</h2>
				<div style={styles.testimonialCards}>
					<div style={styles.testimonialCard}>
						<p>
							"HealthMate has changed the way I manage my daily health! The
							reminders are so helpful."
						</p>
						<span>- Mary, 72</span>
					</div>
					<div style={styles.testimonialCard}>
						<p>"I love the voice journal! It lets me share my thoughts easily."</p>
						<span>- John, 68</span>
					</div>
					<div style={styles.testimonialCard}>
						<p>
							"The AI assistant is so simple to use, and it reminds me of all my
							medicines."
						</p>
						<span>- Linda, 75</span>
					</div>
				</div>
			</section>

			{/* FAQs Section */}
			<section style={styles.faq} id="faq" aria-labelledby="faq-header">
				<h2 style={styles.sectionHeader} id="faq-header">
					Frequently Asked Questions
				</h2>
				<div style={styles.faqItem}>
					<h4>How does the voice assistant work?</h4>
					<p>Simply speak your commands, and the assistant will respond and guide you.</p>
				</div>
				<div style={styles.faqItem}>
					<h4>Can I change the language settings?</h4>
					<p>Yes, HealthMate supports multiple languages for your convenience.</p>
				</div>
				<div style={styles.faqItem}>
					<h4>Is the app free to use?</h4>
					<p>Yes, all the features are completely free to use.</p>
				</div>
			</section>

			{/* Contact Section */}
			<section
				style={styles.contact}
				id="contact"
				aria-labelledby="contact-header"
			>
				<h2 style={styles.sectionHeader} id="contact-header">
					Need Help?
				</h2>
				<p>For any assistance, please reach out to our support team:</p>
				<p>Email: support@healthmate.com | Phone: 1-800-555-0199</p>
			</section>

			{/* Footer Section */}
			<footer style={styles.footer}>
				<button
					style={styles.button}
					onClick={handleGetStarted}
					aria-label="Get Started"
				>
					Get Started
				</button>
				<p style={styles.copyright}>
					© 2024 HealthMate. All Rights Reserved.
				</p>
			</footer>
		</main>
	);
};

export default MainView;

const styles = {
	container: {
		fontFamily: "Verdana, sans-serif",
		color: "#333",
		padding: "20px",
		maxWidth: "900px",
		margin: "0 auto",
		textAlign: "center",
	},
	heroSection: {
		padding: "30px",
		backgroundColor: "#fafafa",
		borderRadius: "10px",
		boxShadow: "0 3px 12px rgba(0, 0, 0, 0.15)",
	},
	headerText: {
		fontSize: "1.75rem",
		lineHeight: "1.4",
	},
	description: {
		fontSize: "1.25rem",
		lineHeight: "1.6",
		margin: "15px 0",
		color: "#555",
	},
	button: {
		padding: "15px 25px",
		backgroundColor: "#4285F4",
		color: "#fff",
		border: "none",
		borderRadius: "8px",
		cursor: "pointer",
		fontSize: "1rem",
	},
	sectionHeader: {
		fontSize: "1.5rem",
		marginBottom: "20px",
		color: "#4CAF50",
	},
	features: {
		margin: "50px 0",
	},
	featuresGrid: {
		display: "flex",
		justifyContent: "space-around",
		flexWrap: "wrap",
		gap: "30px",
	},
	featureItem: {
		flex: "1 1 calc(45% - 30px)",
		padding: "25px",
		backgroundColor: "#fafafa",
		borderRadius: "10px",
		boxShadow: "0 3px 12px rgba(0, 0, 0, 0.15)",
		maxWidth: "350px",
		textAlign: "center",
	},
	icon: {
		width: "80px",
		height: "80px",
		marginBottom: "15px",
	},
	testimonials: {
		margin: "50px 0",
	},
	testimonialCards: {
		display: "flex",
		justifyContent: "space-around",
		flexWrap: "wrap",
		gap: "30px",
	},
	testimonialCard: {
		flex: "1 1 calc(30% - 20px)",
		padding: "20px",
		backgroundColor: "#f1f1f1",
		borderRadius: "10px",
		boxShadow: "0 3px 12px rgba(0, 0, 0, 0.1)",
		maxWidth: "300px",
		textAlign: "center",
		fontStyle: "italic",
	},
	faq: {
		margin: "50px 0",
	},
	faqItem: {
		marginBottom: "15px",
	},
	contact: {
		margin: "50px 0",
	},
	footer: {
		marginTop: "50px",
		padding: "30px",
		backgroundColor: "#fafafa",
		borderRadius: "10px",
		boxShadow: "0 3px 12px rgba(0, 0, 0, 0.15)",
	},
};