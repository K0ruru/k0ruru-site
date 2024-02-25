import "./Home.scss";
import home_pic from "../assets/home_pic.png";

const Home = () => {
	return (
		<>
			<div className="container">
				<div className="home-content">
					<div className="home-text">
						<h2>HEIYA ! IM K0RURU OR...</h2>
						<h1>
							NURFAIZ <span>QALBI</span>
						</h1>
						<p>
							I&apos;ve been making bugs and stuff since 2018, I thrive on
							challenges and chaos. I like trying new things and bang my head
							against the wall if it&apos;s not working :) I&apos;m a developer
							based in my homeland, Indonesia, and it&apos;s a pleasure to have
							you here on my page.
						</p>
						<button className="btn">
							<svg
								width="180px"
								height="60px"
								viewBox="0 0 180 60"
								className="border"
							>
								<polyline
									points="179,1 179,59 1,59 1,1 179,1"
									className="bg-line"
								/>
								<polyline
									points="179,1 179,59 1,59 1,1 179,1"
									className="hl-line"
								/>
							</svg>
							<span>CONTACT ME</span>
						</button>
					</div>
					<div className="pic">
						<img src={home_pic} alt="Home Pic" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
