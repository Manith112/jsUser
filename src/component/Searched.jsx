import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import Card from "./Card";
import Movie from "./Movie";

function Searched() {
  const { title } = useParams();
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    getSearchMovie();
    // eslint-disable-next-line
  }, [title]);

  const getSearchMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&query=${title}&page=1&include_adult=false`
    );
    const data = await response.json();
    setSearchedMovies(data.results);
  };

  return (
    
    <section className="px-8 bg-black">
      <h1 className="text-4xl font-bold text-mono text-white pt-5">
        Search Results for "{title}"
      </h1>
      <div className="mx-auto py-10 px-6 max-w-[90%]">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-x-8 mt-12">
        {searchedMovies.length &&
          searchedMovies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
        </div>
    </section>
    
  );
}

export default Searched;