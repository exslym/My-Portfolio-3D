import { BrowserRouter } from 'react-router-dom';
import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	Socials,
	StarsCanvas,
	Tech,
	Works,
} from './components';

const App = () => {
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary1 bg-gradient-to-r from-grad_clr1 via-grad_clr2 to-grad_clr3'>
				<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center h-full'>
					<Navbar />
					<Hero />
				</div>
				<About />
				<Tech />
				<Experience />
				<Works />
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
