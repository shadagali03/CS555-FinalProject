const MainView = () => {
	return (
		<div style={styles.container}>
			{/* Hero Section */}
			<header style={styles.heroSection} id="home">
				<h1 style={styles.headerText}>Your Health Companion for Better Living</h1>
				<p style={styles.description}>
					Helping you manage health with reminders, tracking, and language support.
				</p>
				<button style={styles.button}>Get Started</button>
			</header>

			{/* Core Features Section */}
			<section style={styles.features} id="features">
				<h2 style={styles.sectionHeader}>Core Features</h2>
				<div style={styles.featuresGrid}>
					<div style={styles.featureItem}>
						<img src={`${process.env.PUBLIC_URL}/assistant.png`} alt="Streaks" style={styles.icon} />
						<h3>AI Voice Assistant</h3>
						<p>An easy-to-use assistant for health support.</p>
					</div>
					<div style={styles.featureItem}>
						<img src={`${process.env.PUBLIC_URL}/reminder.png`} alt="Health Reminders" style={styles.icon} />
						<h3>Health Reminders</h3>
						<p>Reminders for activities like walking and medication.</p>
					</div>
					<div style={styles.featureItem}>
						<img src={`${process.env.PUBLIC_URL}/languages.png`} alt="Multi-language Support" style={styles.icon} />
						<h3>Multi-language Support</h3>
						<p>Accessible to people from diverse backgrounds.</p>
					</div>
					<div style={styles.featureItem}>
						<img src={`${process.env.PUBLIC_URL}/voicecontrol.png`} alt="Health Journal" style={styles.icon} />
						<h3>Health Journal</h3>
						<p>Record your health and mood daily with voice commands.</p>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section style={styles.testimonials} id="testimonials">
				<h2 style={styles.sectionHeader}>What Our Users Say</h2>
				<div style={styles.testimonialCards}>
					<div style={styles.testimonialCard}>
						<p>"HealthMate has changed the way I manage my daily health! The reminders are so helpful."</p>
						<span>- Mary, 72</span>
					</div>
					<div style={styles.testimonialCard}>
						<p>"I love the voice journal! It lets me share my thoughts easily."</p>
						<span>- John, 68</span>
					</div>
					<div style={styles.testimonialCard}>
						<p>"The AI assistant is so simple to use, and it reminds me of all my medicines."</p>
						<span>- Linda, 75</span>
					</div>
				</div>
			</section>

			{/* FAQs Section */}
			<section style={styles.faq} id="faq">
				<h2 style={styles.sectionHeader}>Frequently Asked Questions</h2>
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
					<p>Yes, basic features are free. Premium features are available for a small fee.</p>
				</div>
			</section>

			{/* Contact Section */}
			<section style={styles.contact} id="contact">
				<h2 style={styles.sectionHeader}>Need Help?</h2>
				<p>For any assistance, please reach out to our support team:</p>
				<p>Email: support@healthmate.com | Phone: 1-800-555-0199</p>
			</section>

			{/* Footer Section */}
			<footer style={styles.footer}>
				<button style={styles.button}>Get Started</button>
				<p style={styles.copyright}>© 2024 HealthMate. All Rights Reserved.</p>
			</footer>
		</div>
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
	navbar: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "10px 20px",
		backgroundColor: "#4CAF50",
		color: "#fff",
	},
	logo: {
		fontSize: "24px",
		fontWeight: "bold",
	},
	navLinks: {
		display: "flex",
		gap: "15px",
	},
	navLink: {
		color: "#fff",
		textDecoration: "none",
		fontSize: "18px",
	},
	heroSection: {
		padding: "30px",
		backgroundColor: "#fafafa",
		borderRadius: "10px",
		boxShadow: "0 3px 12px rgba(0, 0, 0, 0.15)",
	},
	headerText: {
		fontSize: "28px",
		lineHeight: "1.4",
	},
	description: {
		fontSize: "20px",
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
		fontSize: "18px",
	},
	sectionHeader: {
		fontSize: "24px",
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