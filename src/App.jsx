// import React from 'react'
import { Routes, Route } from "react-router-dom";
import {
	Home,
	SphericalText,
	ModelsInASphere,
	FloatingOpenNCloseLaptop,
	TokyoScroll,
	ScrollTriggerPage,
} from "./pages";

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/1" element={<SphericalText />} />
			<Route exact path="/2" element={<ModelsInASphere />} />
			<Route exact path="/3" element={<FloatingOpenNCloseLaptop />} />
			<Route exact path="/4" element={<TokyoScroll />} />
			<Route exact path="/5" element={<ScrollTriggerPage />} />
		</Routes>
	);
}

export default App;
