import Provider from "./context/Provider";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Resume from "./components/Resume";
import Passion from "./components/Service/Service";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<Provider>
			<Header />
			<Hero />
			<About />
			<Experience />
			<Resume />
			<Passion />
			<Work />
			<Contact />
			<Footer />
		</Provider>
	);
}

export default App;
