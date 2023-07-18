import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import requests from "../Requests/Request";





const Main = (props) => {
    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)];
  
    useEffect(() => {
      axios.get(requests.requestPopular).then((response) => {
        setMovies(response.data.results);
      });
    }, []);
  
    const navigate= useNavigate();
  
  

  
  const handleClick=()=>{
    navigate(`/${props.genre}/${movie.id}`)
  }
  
  
    return (
      <div className="w-full h-[70vh] md:h-[600px] text-[#FFFDE3]">
        <div className="w-full h-full">
          <div className="absolute w-full h-[70vh] md:h-[600px] bg-gradient-to-r from-black">
            {" "}
          </div>
          <img
            className="w-full h-[70vh] md:h-full object-cover"
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt=""
          />
          <div className="absolute w-full top-[20%] p-4 md:p-16">
            <h1 className="text-2xl md:text-5xl font-bold">{movie?.title} </h1>
            <div className="my-4">
              <button onClick={handleClick} className=" border bg-gray-300 text-black border-gray-300 py-2 px-5" >
                Play
              </button>
              <button className="border text-[#FFFDE3] border-gray-300 py-2 px-5 ml-4 ">
                Watch Later
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              Released: {movie?.release_date}{" "}
            </p>
            
          <p className="w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] text-gray-200 text-sm md:text-base mt-2">
              
                {movie?.overview}
              
          </p>
  
              
  
          </div>
        </div>
      </div>
    );
  };
  
  export default Main;