import React from "react";
import Card from "./card";
import Footer from "./footer";
import Navbar from "./navbar";
import Jumbo from "./jumbo";

//create your first component
const Home = () => {
	return (
		<div>
				<div><Navbar></Navbar></div>
			<div className="container">
				<div><Jumbo></Jumbo></div>
				<div className="d-flex"><Card></Card><Card></Card><Card></Card><Card></Card></div>
			</div>
				<div><Footer></Footer></div>
		</div>
)};

export default Home;
