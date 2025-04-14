import { BrowserRouter } from 'react-router-dom';
import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	Projects,
	Socials,
	StarsCanvas,
	Tech,
} from './components';

const App = () => {
	return (
		<BrowserRouter>
			<div className='app-content'>
				<div className='hero-content'>
					<Navbar />
					<Hero />
				</div>

				<About />
				<Tech />
				<Experience />
				<Projects />

				<div className='relative z-0'>
					<Contact />
					<StarsCanvas />
					<Socials />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
