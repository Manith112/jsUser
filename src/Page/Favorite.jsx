import React from 'react';
import { useSelector } from 'react-redux';
import Movie from '../component/Movie';


const FavouritePage = () => {
	const { favourite } = useSelector((state) => state.movies);

	return (
		<div className="container">
			<h1 className="mt-4 mb-4">Favourite</h1>
			<div className="row">{favourite && favourite.map((movie) => <Movie movie={movie} />)}</div>
		</div>
	);
};

export default FavouritePage;