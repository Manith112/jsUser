import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { FiChevronsRight } from 'react-icons/fi';


const Row = ({ title, fetchURL, rowID, genre}) => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
            console.log(response.data.results);
            
        })
    }, [fetchURL]);

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
      var slider = document.getElementById('slider' + rowID)
      slider.scrollRight = slider.scrollRight + 500;
  };
    const handleClick = () =>{
      navigate(`${genre}`)
    }
 

    return(
        <div className="rows">
            <div className="flex flex-row items-center">
            <h2 className="text-[#FFFDE3] font-bold md:text-xl p-4 cursor-pointer">{title}</h2>
      {genre ? <FiChevronsRight onClick={handleClick} className="text-white cursor-pointer"/> : null}
      </div>
      <div className="relative flex items-center ml-2 group">
      <div
          className="slideleft"
          size={30}
          onClick={slideLeft}
        />
        <div id={'slider'+ rowID} className='slide'>
          {movies.map((item) => {
            return (
              <Movie item={item} genre={genre}></Movie>
            );
          })}
        </div>
        <div
          className='slideright'
          size={30}
          onClick={slideRight}
        />
      </div>
        </div>
    )
}
export default Row;