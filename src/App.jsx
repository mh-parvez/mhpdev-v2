import Navbar from "./layouts/Navbar";
import Home from './layouts/Home';
import About from './layouts/About';
import Project from './layouts/Project';
import Contact from './layouts/Contact';
     
const App = () => {
  return (
		<div>
			<Navbar />
			<div className='container'>
				<Home />
				<Project />
				<About />
				<Contact />
			</div>
		</div>
  );
}

export default App;
