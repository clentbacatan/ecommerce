import Banner from '../components/Banner';
import Highlights from '../components/Highlights';
// import CourseCard from '../components/CourseCard'; will be imported to Courses page


export default function Home() {
	
	const data = {
		title: "CV-Ecommerce",
		content: "Opportunities for everyone, everywhere",
		destination: "/products",
		label: "Enroll now!" 
		
	}


	return (
		<>
			<Banner data={ data } />
			<Highlights />
		</>

	)
}