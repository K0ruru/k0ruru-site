// import { useState } from 'react'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

function App() {
	const handleScroll = (event) => {
		console.log(event.target);
		const container = event.currentTarget;
		const scrollAmount = event.deltaY;

		container.scrollLeft += scrollAmount;
	};

	return (
		<div className="app-container" onWheel={handleScroll}>
			<Navbar />
			<div className="horizontal-scroll-container">
				<div className="page-container">
					<Home className="component" />
				</div>
				<div className="page-container">
					<About className="component" />
				</div>
				{/* Add more page containers as needed */}
			</div>
		</div>
	);
}

export default App;
