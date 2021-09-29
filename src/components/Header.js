import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Fragment>
			<h1>React Router App</h1>
			<ul className="nav">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/profile">Profile</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</Fragment>
	);
};

export default Header;
