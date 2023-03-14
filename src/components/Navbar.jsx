import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false);

	return (
		<nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary`}>
			<div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
				<Link
					to='/'
					className='flex items-center gap-2'
					onClick={() => {
						setActive('');
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo} alt='logo' className='w-10 h-10 object-contain mr-1' />
					<p className='flex text-white text-[18px] font-bold cursor-pointer'>
						Andrei&ensp;<span className='sm:block hidden'>Tsyplukhin</span>
					</p>
				</Link>
				<ul className='list-none hidden sm:flex flex-row gap-10'>
					{navLinks.map(link => (
						<li
							key={link.id}
							onClick={() => setActive(link.title)}
							className={`${
								active === link.title ? 'text-white' : 'text-secondary'
							} hover:text-white text-[18px] font-medium cursor-pointer`}
						>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
				<div className='sm:hidden flex flex-1 justify-end items-center'>
					<img
						src={toggle ? close : menu}
						alt='menu'
						onClick={() => setToggle(!toggle)}
						className='w-[28px] h-[28px] object-contain cursor-pointer'
					/>
					<div
						className={`${
							!toggle ? 'hidden' : 'flex'
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
					>
						<ul className='list-none flex justify-end items-start flex-col gap-4'>
							{navLinks.map(link => (
								<li
									key={link.id}
									onClick={() => {
										setToggle(!toggle);
										setActive(link.title);
									}}
									className={`${
										active === link.title ? 'text-white' : 'text-secondary'
									} font-poppins font-medium cursor-pointer text-[16px]`}
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
