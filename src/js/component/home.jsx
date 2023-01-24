import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Hero } from "./Hero.jsx";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Hero />
			<Card />
			<Footer />
		</div>
	);
};

export default Home;
