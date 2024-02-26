// import { useState } from 'react'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import "./App.scss";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<About id="about" />
		</>
	);
}

export default App;
