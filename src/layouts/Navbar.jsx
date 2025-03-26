import { HiMenu, HiX } from "react-icons/hi";
import { navlinks } from "./../assets/data";
import { useState } from "react";

const Navbar = () => {
	const [hamburger, setHamburger] = useState(false);

	const hamburgerMenu = () => {
		setHamburger(!hamburger);
	};

	const pageUp = () => {
		window.scrollTo({ top: (0, 0), behavior: "smooth" });
	};

	return (
		<div>
			<nav>
				<h3 className='logo' onClick={pageUp}>
					Mhp.dev
				</h3>
				<ul>
					{navlinks.map((item) => (
						<li key={item.name}>
							<a href={item.link}>{item.name}</a>
						</li>
					))}
					<li>
						<a
							href='https://drive.google.com/file/d/17uttGl_osX8ecqVcV6GLLue99OxhqL1m/view'
							target='_blank'>
							Resume
						</a>
					</li>
					<li>
						<HiMenu
							className='mobile-menu'
							onClick={() => hamburgerMenu()}
						/>
					</li>
				</ul>
			</nav>
			{/* mobile menu */}
			<div
				className={`mobile-nav ${
					hamburger ? "open-menu" : "closed-menu"
				}`}>
				<span onClick={() => hamburgerMenu()}>
					<HiX className='close-button' />
				</span>

				<ul>
					{navlinks.map((item) => (
						<li key={item.name} onClick={() => hamburgerMenu()}>
							<a href={item.link}>{item.name}</a>
						</li>
					))}
					<li>
						<a
							href='https://drive.google.com/file/d/17uttGl_osX8ecqVcV6GLLue99OxhqL1m/view'
							target='_blank'>
							Resume
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
