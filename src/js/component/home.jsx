import React from "react";

//include images into your bundle
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<NavBar brand="Start Bootstrap" />

			<Jumbotron title="A Warm Welcome!" 
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quam sit rerum neque consequuntur adipisci ducimus nobis. Exercitationem, molestiae eaque?"
					button="Call to action!" />

			<div className="d-flex justify-content-between">
				<Card 
					linkImg = "https://picsum.photos/200/200?random=1"
					title= "Card Title"
					description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta!"
					linkButton= "#"
					button= "Find out more!"
				/>
				<Card 
					linkImg = "https://picsum.photos/200/200?random=2"
					title= "Card Title"
					description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta!"
					linkButton= "#"
					button= "Find out more!"
				/>
				<Card 
					linkImg = "https://picsum.photos/200/200?random=3"
					title= "Card Title"
					description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta!"
					linkButton= "#"
					button= "Find out more!"
				/>
				<Card 
					linkImg = "https://picsum.photos/200/200?random=4"
					title= "Card Title"
					description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta!"
					linkButton= "#"
					button= "Find out more!"
				/>
			</div>
			<Footer description="Copyright © Your Website 2023"/>
		</div>
	);
};

export default Home;
