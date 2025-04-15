const About = () => {
	return (
		<div className='about-container' id="about">
			<div className='about-me'>
				<h3>About Me,</h3>
				<ul>
					<li>
						Hey, I'm MH Parvez, A Frontend Software Developer. My
						main stack currently is React/Next.js in combination
						with SASS & TypeScript.
					</li>
					<li>
						I'm highly interested to working with Design System,
						Monorepo, Storybook, Accessibilities etc. advanced
						frontend things.
					</li>
					<li>
						I love probelm solving. I do compitative programming for
						grow up solving skills.
					</li>
				</ul>
			</div>

			<div className='about-skill' >
				<h3>About Skill,</h3>
				<ul>
					<li>
						<b>Languages:</b> Javascript, Typescipt & C++ for
						Compitative Programming.
					</li>
					<li>
						<b>Framworks:</b> React.js for flexibility, Next.js for
						scalable web appliction.
					</li>
					<li>
						<b>State Management:</b> Redux, Redux Toolkit & Zustand
					</li>
					<li>
						<b>Styling UI:</b> CSS, SCSS, Tailwind.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
