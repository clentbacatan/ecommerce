

import Banner from '../components/Banner';
import Highlights from '../components/Highlights';


export default function Home() {
	
	const data = {
		title: "CV-Ecommerce",
		content: "Opportunities for everyone, everywhere",
		destination: "/products",
		label: "See products!" 
		
	}


	return (
		<>
			<Banner data={ data } />
			<Highlights />
		</>

	)
}