import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false);

	return (
		<nav
			className={`w-full  flex items-center mx-auto fixed  bg-transparent transp-gradient  top-0 left-1/2 -translate-x-1/2 z-20`}
		>
			<div
				className={`${styles.paddingX} w-full max-w-7xl flex justify-between items-center sm:py-5 py-4 mx-auto`}
			>
				<Link
					to='/'
					className='flex items-center gap-2'
					onClick={() => {
						setActive('');
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo} alt='logo' className='w-10 h-10 rounded-full object-contain mr-1' />
					<p className='flex text-white text-[18px] font-bold cursor-pointer hover:text-primary'>
						Andrei&ensp;<span className='sm:block hidden'>Tsyplukhin</span>
					</p>
				</Link>
				<ul className='list-none hidden sm:flex flex-row gap-10'>
					{navLinks.map(link => (
						<li
							key={link.id}
							onClick={() => setActive(link.title)}
							className={`${
								active === link.title ? 'text-clr_blue' : 'text-white-100'
							} hover:text-primary text-[18px] font-medium cursor-pointer`}
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
						// className={`${
						// 	!toggle ? 'hidden' : 'flex'
						// } justify-start items-end py-6 px-8 bg-grad_clr1 absolute right-0 top-[70px] mx-4 my-2 min-w-fit w-full max-w-xs z-10 rounded-xl `}
						className={`${
							!toggle ? 'hidden' : 'flex'
						} justify-start items-end p-8 bg-transp90 rounded-xl z-10 absolute top-[70px] right-1/2 translate-x-1/2 w-full max-w-menuWidth `}
					>
						<ul className='list-none flex justify-end items-start flex-col gap-10 w-full'>
							{navLinks.map(link => (
								<li
									key={link.id}
									onClick={() => {
										setToggle(!toggle);
										setActive(link.title);
									}}
									className={`${
										active === link.title ? 'text-clr_blue' : 'text-white-100'
									} font-poppins font-bold cursor-pointer xs:text-[60px] text-[40px] text-right w-full`}
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
