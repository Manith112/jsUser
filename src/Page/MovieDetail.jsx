import { PlayIcon } from "@heroicons/react/24/solid";
import { IoMdPlay } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import { GiShare } from "react-icons/gi";
import { useEffect, useState } from "react"
import { AiFillStar } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import CastList from "../component/CastList";
export function MovieDetail(){
    // const [movie, setDetail] = useState({});
     const { id} = useParams();
    const [movie, setMovieData] = useState([]);
    const [trailer, setTrailer] = useState(null);
    const [showModal, setShowModal] = useState(false);
    // const [cast, setCast] = useState({})
   


   
    useEffect(() => {
      fetchData();
    }, [id]);
  
    const fetchData = async () => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4113f3ad734e747a5b463cde8c55de42&append_to_response=videos`
        )
        .then((response) => {
          setMovieData(response.data);
          const trailerid = response.data.videos.results.find(
            (vid) => vid.name === "Official Trailer"
          );
          setTrailer(trailerid ? trailerid : response.data.videos.results[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    console.log(movie);

    
    
    return(
      <>
      <div className=" detail "> 
       {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between border-b p-2 ">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-white opacity-100  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-white opacity-100  h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <>
                    <iframe 
                    // width="560" height="315" 
                    src= {`https://www.youtube.com/embed/${trailer.key}`} 
                    className="w-[50vh] h-[50vh] md:w-[100vh] md:h-[60vh]"
                    allowFullScreen
                    >

                    </iframe>
                    </>

                    {/*footer*/}
                  </div>
                </div>
              </div>
              <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
      
       
     
       
      <div className="">
        <div className="absolute w-full h-[90vh] bg-gradient-to-t from-black ">
          {" "}
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          alt=""
          className="backdrop"
        />
      </div>
      <div className="flex justify-center ">
        <div className="flex flex-col items-center md:flex-row md:max-w-2xl lg:max-w-3xl absolute xl:max-w-4xl md:mt-[-300px] mt-[-200px] text-white ">
          <div className=" lg:w-[30%] h-auto md:h-[400px] w-[70%] ">
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
          </div>
          <div className="float-left w-[70%] md:pl-12 ">
            <p className="text-3xl md:text-5xl mb-3 mt-3 md:mt-0 font-weight-bold" >
              {movie.title || movie.original_title}{" "}
            </p>
            <div className="flex flex-row items-center ">
              <div className="flex flex-row justify-center items-center mr-5 pb-2">
                <AiFillStar className="text-3xl mr-2 text-yellow-300" />
                <p className="text-4xl ">
                  {movie?.vote_average?.toFixed(1)}{" "}
                </p>
              </div>
              <div className="flex flex-col">
                <div className="grid grid-flow-col auto-cols-max gap-4 ">
                  <p className="text-red-600 text-sm md:text-base">
                    Released: {movie?.release_date}{" "}
                  </p>
                  <p className="text-red-600 text-sm md:text-base">
                    {movie?.runtime} min
                  </p>
                </div>

                <div className="grid grid-flow-col auto-cols-max gap-4 mb-3">
                  {movie.genres &&
                    movie.genres.slice(0, 5).map((genre, i) => (
                      <span key={i} className="text-sm  md:text-base">
                        {genre.name}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            <p className="overview">{movie.overview} </p>


            <div className="flex flex-row items-center ">

                                            
              <button
              onClick={() => setShowModal(true)}
                className="trailer"
              >
                <IoMdPlay className="mr-3" />
              
                Watch Trailer
               
              </button>


              <p  className=" cursor-pointer">
              <FaHeart className="text-gray-300 text-2xl ml-6 mb-8 md:mb-0" />
              </p>
              
              <p>
                <GiShare className="text-gray-300 text-4xl ml-3 mb-8 md:mb-0" />
              </p>
              <p>
                <FiBookmark className="text-gray-300 text-4xl ml-3 mb-8 md:mb-0" />
              </p>
              
            </div>
            
            
            
          </div>
          <div></div>
        </div>
      </div>
      
    
    
 </div>
 
  
 </>
   
      
    )
}