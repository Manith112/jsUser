import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
// import { UserAuth } from "../Lock/Auth";

 


function Nav() {
  const { user, logOut } = UserAuth();

  const [searchKey, setSearchKey] = useState("");

  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate(`/search/${searchKey}`);
  };

  
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div class="col-sm-6 col-md-5 col-lg-6">
                        
    <nav className="navbar sticky-top">
      <NavLink to={"/"} >
      <div id="title">
        <img src="./images/movielogo1.png" alt="" />
      </div>
      </NavLink>
      {user?.email ? (
        <>
      <div className="listbar">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-text" : "non-active-text"
          }
          to={"/popular"}
        >
          Popular
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-text" : "non-active-text"
          }
          to={"/upcoming"}
        >
          Upcoming
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-text" : "non-active-text"
          }
          to={"/top_rated"}
        >
          Top-Rated
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-text" : "non-active-text"
          }
          to={"/now_playing"}
        >
          Now-Playing
        </NavLink>
      </div>

      
        
     
        <div className="search">
          <form  onSubmit={search}>
        <input
          type="text"
          className="input"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button type="submit" className="Search">
          <MagnifyingGlassIcon className="w-8 h-8" />
        </button>
      
      
            {/* <NavLink to="/favourite">
            <button className="text-[#FFFDE3] pr-4">Watch List</button>
          </NavLink> */}
         
        {/* <div className="logOut"> */}
          <button
            onClick={handleLogOut}
            className="logout"
          >
            Logout
          </button>
          {/* </div> */}
         </form>
         </div>
         </>
      ) : (
        <div>
          <NavLink to="/signIn">
            <button className="text-[#FFFDE3] pr-4">Sign In</button>
          </NavLink>
          <NavLink to="/signUp">
            <button className="text-[#FFFDE3] px-6 py-2 rounded cursor-pointer bg-red-600 ">
              Sign Up
            </button>
          </NavLink>
        </div>
        
      )}

     
    </nav>
    
  );
}

export default Nav;