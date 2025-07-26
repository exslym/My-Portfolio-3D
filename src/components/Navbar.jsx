import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false);

	return (
		<nav className='navbar'>
			<div className='navbar-container'>
				<button
					type='button'
					className='navbar-logo'
					onClick={() => {
						setActive('');
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo} alt='logo' />
					<p>Andrés</p>
				</button>

				<ul className='navbar-links'>
					{navLinks.map(link => (
						<li
							key={link.id}
							onClick={() => setActive(link.title)}
							className={`${
								active === link.title ? 'text-blue-primary' : 'text-white-100'
							} navbar-links-item`}
						>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>

				<div className='burger'>
					<img
						src={toggle ? close : menu}
						alt='menu'
						onClick={() => setToggle(!toggle)}
						className='burger-icon'
					/>
					<div className={`${!toggle ? 'hidden' : 'flex'} menu`}>
						<ul className='menu-list'>
							{navLinks.map(link => (
								<li
									key={link.id}
									onClick={() => {
										setToggle(!toggle);
										setActive(link.title);
									}}
									className={`${
										active === link.title
											? 'text-blue-primary'
											: 'text-white-100'
									} menu-list-item`}
								>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
