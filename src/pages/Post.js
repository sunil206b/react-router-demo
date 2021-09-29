import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Post = () => {
	const { id } = useParams();
	const query = new URLSearchParams(useLocation().search);
	return (
		<div>
			<h3>Id is = {id}</h3>
			<h3>First Name: {query.get('first')}</h3>
			<h3>Last Name: {query.get('last')}</h3>
		</div>
	);
};

export default Post;
