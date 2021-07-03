import React from 'react'
import Caraousel from './Caraousel'
import HomeScreen from "../screens/HomeScreen";
import Footer from './Footer'
function Home() {

	

    return (<>
					<div className="padding">
						<Caraousel />
						<HomeScreen />
						<Footer />
					</div>
					
					</>
				);
}

export default Home
