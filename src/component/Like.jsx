import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Like = () => {
    const [like, setLike] = useState(false);

    if (like) {
        return <AiFillHeart className=" text-4xl ml-6 mb-8 md:mb-0 text-red-600" onClick={() => setLike(false)}/>
    }else{
        return <AiOutlineHeart className=" text-4xl ml-6 mb-8 md:mb-0" onClick={() => setLike(true)}/>
    }


}
export default Like;