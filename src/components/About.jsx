import "./About.scss";

const About = () => {
	return (
		<>
			<div className="container">
				<div className="about-content" id="about">
					<div className="about-text">
						<h1>
							A little <span>about me</span>...
						</h1>
						<p>
							Greetings! I&apos;m Nurfaiz Qalbi, a junior full-stack developer
							from Indonesia with a passion for coding since 2018. My expertise
							spans the entire web development process, from creating
							captivating front-end designs to optimizing back-end
							functionality. I thrive on challenges and continuously adapt to
							emerging technologies, ensuring my skills stay ahead in this
							dynamic field. Beyond coding, I enjoy exploring the vibrant
							streets of Indonesia and sharing tech insights on my social media.
							Let&apos;s connect and embark on this coding adventure together!
						</p>
					</div>
					<div className="techstack">
						<h3>My current tech stack..</h3>
						<div className="tech-container">
							<div className="techs">
								<div className="tech">
									<i className="devicon-mongodb-plain"></i>
									<p>Mongo DB</p>
								</div>
								<div className="tech">
									<i className="devicon-express-original"></i>
									<p>Express.js</p>
								</div>
								<div className="tech">
									<i className="devicon-react-original"></i>
									<p>React</p>
								</div>
								<div className="tech">
									<i className="devicon-nodejs-plain-wordmark"></i>
									<p>Node.js</p>
								</div>
							</div>
							<div className="vl"></div>
							<div className="tech-stack-name">
								<h1>M E R N</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
