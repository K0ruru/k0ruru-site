import "./Navbar.scss";

const Navbar = () => {
	return (
		<>
			<nav>
				<div className="container">
					<div className="nav-content">
						<div className="logo">
							<h1>k0rurU.</h1>
						</div>
						<div className="nav-links">
							<li className="nav-link active">
								<p>1 </p>
								<a href="#" className="">
									Home
								</a>
							</li>
							<li className="nav-link">
								<p>2 </p>
								<a href="#">About</a>
							</li>
							<li className="nav-link">
								<p>3 </p>
								<a href="#">Skills</a>
							</li>
							<li className="nav-link">
								<p>4 </p>
								<a href="#">Projects</a>
							</li>
							<li className="nav-link">
								<p>5 </p>
								<a href="#">Contact</a>
							</li>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
