import { useState, useEffect } from "react";
import "./Navbar.scss";

const Navbar = () => {
	const [activeLink, setActiveLink] = useState("home");

	const handleScroll = () => {
		const homeSection = document.getElementById("home");
		const aboutSection = document.getElementById("about");
		const skillsSection = document.getElementById("skills");

		const getOffset = (element) =>
			element.getBoundingClientRect().top + window.scrollY;

		const scrollPosition = window.scrollY + 50;

		if (
			homeSection &&
			scrollPosition >= getOffset(homeSection) &&
			scrollPosition < getOffset(aboutSection)
		) {
			setActiveLink("home");
		} else if (
			aboutSection &&
			scrollPosition >= getOffset(aboutSection) &&
			scrollPosition < getOffset(skillsSection)
		) {
			setActiveLink("about");
		} else if (skillsSection && scrollPosition >= getOffset(skillsSection)) {
			setActiveLink("skills");
			addAnimationClassToSkills();
		}
	};

	const addAnimationClassToSkills = () => {
		const skills = document.querySelectorAll(".skills-container .skill");
		skills.forEach((skill) => {
			skill.classList.add("animate");
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			window.scrollTo({
				top: section.offsetTop - 50,
				behavior: "smooth",
			});
		}
	};

	return (
		<>
			<nav>
				<div className="container">
					<div className="nav-content">
						<div className="logo">
							<h1>k0rurU.</h1>
						</div>
						<div className="nav-links">
							<li
								className={`nav-link ${activeLink === "home" ? "active" : ""}`}
								onClick={() => scrollToSection("home")}
							>
								<p>1 </p>
								<a href="#">Home</a>
							</li>
							<li
								className={`nav-link ${activeLink === "about" ? "active" : ""}`}
								onClick={() => scrollToSection("about")}
							>
								<p>2 </p>
								<a href="#">About</a>
							</li>

							<li
								className={`nav-link ${
									activeLink === "skills" ? "active" : ""
								}`}
								onClick={() => scrollToSection("skills")}
							>
								<p>3 </p>
								<a href="#">Skills</a>
							</li>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
