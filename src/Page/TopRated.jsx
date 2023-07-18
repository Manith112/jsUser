import React, { useEffect, useState } from "react";
import axios from "axios";

import Movie from "../component/Movie";



const TopRated = () => {
  
  const key = "4113f3ad734e747a5b463cde8c55de42";
 
 
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  
  const fetchData = async (pageNum) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${pageNum}`
      )
      .then((response) => {
        setMovies((prevstate) => [...prevstate, ...response.data.results]);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  console.log(movies)

  const loadMore = () => {
    setPage((prevstate) => prevstate + 1);
  };

  return (
   
    
    <div className="rows">
       <h1 className="movie">Top-Rated Movies</h1>
      <div className="mx-auto py-10 px-6 max-w-[90%]">
      
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-x-8 mt-12">
          {movies.map((item) => (
           <Movie item={item} ></Movie>
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
        
        <button className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded " onClick={loadMore} disabled={page>15 ? true: false}>
          Load More
        </button>
                  
        </div>
      </div>
    </div>
    
  );
};

export default TopRated;
