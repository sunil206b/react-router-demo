import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Post from './pages/Post';
import Profile from './pages/Profile';

const App = () => {
	const [ login, setLogin ] = useState(false);

	const handleClick = () => {
		setLogin(!login);
	};
	return (
		<Router basename="/app">
			<div className="App">
				<Header />
				<button onClick={handleClick}>{login ? 'Logout' : 'Login'}</button>
				<Switch>
					<Route path="/about" component={About} />
					{/* <Route path="/profile">{login ? <Profile /> : <Redirect to="/" />}</Route> */}
					<Route path="/profile">
						<Profile login={login} />
					</Route>
					<Route path="/post/:id" component={Post} />
					<Route path="/" component={Home} exact />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Router>
	);
};
export default App;
