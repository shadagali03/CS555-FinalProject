const MainView = () => {
	return (
		<div style={styles.container}>
			<header style={styles.header}>
				<h1>Your Health Companion for Better Living</h1>
				<p style={styles.description}>
					A voice assistant that helps seniors manage their health
					with ease. Stay active, manage medication, and track your
					health effortlessly.
				</p>
				<button style={styles.button}>Get Started</button>
			</header>

			{/* Features Section */}
			<section style={styles.features}>
				<h2>Key Features</h2>
				<div style={styles.featuresGrid}>
					<div style={styles.featureItem}>
						<img
							src="https://via.placeholder.com/100"
							alt="Health Reminders"
							style={styles.icon}
						/>
						<h3>Health Reminders</h3>
						<p>
							Get voice reminders for walking, medication, and
							more.
						</p>
					</div>
					<div style={styles.featureItem}>
						<img
							src="https://via.placeholder.com/100"
							alt="Multi-language Support"
							style={styles.icon}
						/>
						<h3>Multi-language Support</h3>
						<p>Accessible to seniors from diverse backgrounds.</p>
					</div>
					<div style={styles.featureItem}>
						<img
							src="https://via.placeholder.com/100"
							alt="Health Tracking"
							style={styles.icon}
						/>
						<h3>Track Your Health</h3>
						<p>Record daily health insights with your voice.</p>
					</div>
				</div>
			</section>

			{/* Additional Features Section */}
			<section style={styles.additionalFeatures}>
				<h2>Additional Features</h2>
				<div style={styles.featuresGrid}>
					<div style={styles.featureItem}>
						<img
							src="https://via.placeholder.com/100"
							alt="Health Journal"
							style={styles.icon}
						/>
						<h3>Voice-Controlled Health Journal</h3>
						<p>
							Record your daily health status through voice
							commands.
						</p>
					</div>
					<div style={styles.featureItem}>
						<img
							src="https://via.placeholder.com/100"
							alt="Streaks"
							style={styles.icon}
						/>
						<h3>Streaks</h3>
						<p>Encourages you to maintain healthy habits.</p>
					</div>
				</div>
			</section>

			{/* Footer Section */}
			<footer style={styles.footer}>
				<button style={styles.button}>Get Started</button>
			</footer>
		</div>
	);
};

export default MainView;

const styles = {
	container: {
		fontFamily: "Arial, sans-serif",
		color: "#333",
		padding: "20px",
		maxWidth: "900px",
		margin: "0 auto",
		textAlign: "center",
	},
	header: {
		padding: "20px",
		backgroundColor: "#f7f7f7",
		borderRadius: "10px",
		boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
	},
	description: {
		fontSize: "18px",
		margin: "10px 0",
	},
	button: {
		padding: "10px 20px",
		backgroundColor: "#4CAF50",
		color: "white",
		border: "none",
		borderRadius: "5px",
		cursor: "pointer",
		fontSize: "16px",
	},
	features: {
		margin: "40px 0",
	},
	additionalFeatures: {
		margin: "40px 0",
	},
	featuresGrid: {
		display: "flex",
		justifyContent: "space-around",
		flexWrap: "wrap",
		gap: "20px",
	},
	featureItem: {
		flex: "1 1 calc(30% - 20px)",
		padding: "20px",
		backgroundColor: "#f7f7f7",
		borderRadius: "10px",
		boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
		maxWidth: "300px",
	},
	icon: {
		width: "100px",
		height: "100px",
		marginBottom: "10px",
	},
	footer: {
		marginTop: "40px",
		padding: "20px",
		backgroundColor: "#f7f7f7",
		borderRadius: "10px",
		boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
	},
};
