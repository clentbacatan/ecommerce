import Banner from '../components/Banner';

import Highlights from '../components/Highlights';

export default function Home() {

	const data = {
	    title: "SHOPINAS",
	    content: "ONLINE RETAIL STORE",
	    destination: "/products",
	    label: "Shop here!"
	}

	return (
		<>
			<Banner data={ data } />
			<Highlights />
			{/*<CourseCard />*/}
		</>
	)
}