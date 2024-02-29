// import React from 'react'

const Home = () => {
	return (
		<div className="w-full h-full min-h-screen bg-blue-100">
			<div className="flex flex-col min-h-screen w-full items-center justify-center gap-5">
				<a className="home-nav-btn" href="/1">
					1. Spherical Text
				</a>
				<a className="home-nav-btn" href="/2">
					2. Models in a Sphere
				</a>
				<a className="home-nav-btn" href="/3">
					3. Open and Close Floating Laptop
				</a>
				<a className="home-nav-btn" href="/4">
					4. Little Tokyo (Scroll Trigger)
				</a>
				<a className="home-nav-btn" href="/5">
					5. Images and text (Scroll Trigger)
				</a>
			</div>
		</div>
	);
};

export default Home;
