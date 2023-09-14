import { PlayIcon } from "@heroicons/react/24/solid";
import { IoMdPlay } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import { GiShare } from "react-icons/gi";
import { useEffect, useState } from "react"
import { AiFillStar } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import tmdbApi from "../API/tmdbApi";
import Movie from "../component/Movie";

const Detail = ()=>{
    // const [item, setDetail] = useState({});
    const { category, id } = useParams();
    const [item, setItem] = useState(null);
  
    useEffect(() => {
      const getDetail = async () => {
        const response = await tmdbApi.detail(category, id, { params: {} });
        setItem(response);
        window.scrollTo(0, 0);
      };
      getDetail();
    }, [category, id]);

    
    
    return(
      <>
      <div className=" detail "> 
       {item && (
       
     
       <>
      <div className="">
        <div className="absolute w-full h-[90vh] bg-gradient-to-t from-black ">
          {" "}
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original${
            item.backdrop_path || item.poster_path
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
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt=""
            />
          </div>
          <div className="float-left w-[70%] md:pl-12 ">
            <p className="text-3xl md:text-5xl mb-3 mt-3 md:mt-0 font-weight-bold" >
              {item.title || item.original_title}{" "}
            </p>
            <div className="flex flex-row items-center ">
              <div className="flex flex-row justify-center items-center mr-5 pb-2">
                <AiFillStar className="text-3xl mr-2 text-yellow-300" />
                <p className="text-4xl ">
                  {item?.vote_average?.toFixed(1)}{" "}
                </p>
              </div>
              <div className="flex flex-col">
                <div className="grid grid-flow-col auto-cols-max gap-4 ">
                  <p className="text-red-600 text-sm md:text-base">
                    Released: {item?.release_date}{" "}
                  </p>
                  <p className="text-red-600 text-sm md:text-base">
                    {item?.runtime} min
                  </p>
                </div>

                <div className="grid grid-flow-col auto-cols-max gap-4 mb-3">
                  {item.genres &&
                    item.genres.slice(0, 5).map((genre, i) => (
                      <span key={i} className="text-sm  md:text-base">
                        {genre.name}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            <p className="overview">{item.overview} </p>


            <div className="flex flex-row items-center ">

                                            
              {/* <button
              onClick={() => setShowModal(true)}
                className="trailer"
              >
                <IoMdPlay className="mr-3" />
              
                Watch Trailer
               
              </button> */}


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
            <div className="cast">
                <div className="section__header">
                  <h3><i class='bx bx-minus'></i> Casts</h3>
                </div>
                <Movie id={item.id} />
              </div>
            
            
          </div>
          <div></div>
        </div>
      </div>
      </>
      )} 
    
 </div>
 {/* {cast && (
             <img
             src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
             alt={cast.name}
             className="w-full h-full object-cover"
           />
        )} */}
  
 </>
   
      
    )
}
export default Detail;