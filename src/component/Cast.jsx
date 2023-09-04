import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Casts() {
    const [cast, setCast] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getCast();

    }, [id]);

    const getCast = async () => {
        const response =
            await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4113f3ad734e747a5b463cde8c55de42&page=1`);
            const data = await response.json();
            setCast(data);
    };
    return(
        <>
        {cast && (
             <img
             src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
             alt={cast.name}
             className="w-full h-full object-cover"
           />
        )}
        </>
    )
}
export default Casts;