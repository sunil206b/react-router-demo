import React, { Fragment, useEffect } from 'react';
import { Link, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import EditProfile from '../components/EditProfile';
import ViewProfile from '../components/ViewProfile';

const Profile = ({ login }) => {
	const history = useHistory();
	useEffect(
		() => {
			if (!login) {
				history.push('/');
			}
		},
		[ history, login ]
	);

	const { path, url } = useRouteMatch();
	return (
		<Fragment>
			<h2>Profile Page</h2>
			<ul>
				<li>
					<Link to={`${url}/viewprofile`}>View Profile</Link>
				</li>
				<li>
					<Link to={`${url}/editprofile`}>Edit Profile</Link>
				</li>
			</ul>

			<Switch>
				<Route path={`${path}/viewprofile`} component={ViewProfile} />
				<Route path={`${path}/editprofile`} component={EditProfile} />
			</Switch>
		</Fragment>
	);
};

export default Profile;
