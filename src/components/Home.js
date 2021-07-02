import React from 'react'
import Footer from "./Footer";
import Caraousel from './Caraousel'
import HomeScreen from "../screens/HomeScreen";
function Home() {

	

    return (
					<div className="padding">
						<Caraousel />
						<HomeScreen />
						<Footer />
					</div>
				);
}

export default Home
