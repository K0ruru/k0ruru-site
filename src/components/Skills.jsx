// Skills.js

import "./Skills.scss";

const Skills = () => {
	const skillsData = [
		{ name: "HTML", level: 95 },
		{ name: "SCSS", level: 96 },
		{ name: "JavaScript", level: 98 },
		{ name: "PHP", level: 87 },
		{ name: "React", level: 95 },
		{ name: "Vue", level: 90 },
		{ name: "Postgress", level: 93 },
		{ name: "MongoDB", level: 97 },
		{ name: "Docker", level: 78 },
		{ name: "Kubernetes", level: 75 },
	];

	const additionalSkillsData = [
		{ name: "Photoshop", level: 79 },
		{ name: "Illustrator", level: 82 },
		{ name: "Premiere Pro", level: 98 },
		{ name: "After Effects", level: 92 },
	];

	return (
		<div className="container">
			<div className="skills-content" id="skills">
				<div className="header">
					<h1>My Skills</h1>
				</div>
				<div className="skills-container">
					<div className="main-skills">
						{skillsData.map((skill, index) => (
							<div className="skill" key={index}>
								<p>{skill.name}</p>
								<div
									className="progress-bar"
									style={{
										width: `${skill.level}%`,
										"--animation-width": `${skill.level}%`, // Pass to the animation
									}}
								></div>
								<p className="level" style={{ width: `${skill.level}%` }}>
									{skill.level}%
								</p>
							</div>
						))}
					</div>
					<div className="mid">
						<h2>Additional Skills</h2>
					</div>
					<div className="additional-skills">
						{additionalSkillsData.map((skill, index) => (
							<div className="skill" key={index}>
								<p>{skill.name}</p>
								<div
									className="progress-bar"
									style={{
										width: `${skill.level}%`,
										"--animation-width": `${skill.level}%`, // Pass to the animation
									}}
								></div>
								<p className="level" style={{ width: `${skill.level}%` }}>
									{skill.level}%
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
