import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { UserAuth } from "../Lock/Auth";

function Nav() {
  const [searchKey, setSearchKey] = useState("");
  // const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate(`/search/${searchKey}`);
  };

  // const handleLogOut = async () => {
  //   try {
  //     await logOut();
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <nav className="flex items-center justify-between bg-black text-white px-10 py-1">
      <NavLink to={"/"} className="title">
      <i class="fa-light fa-camera-movie">IMovie</i> 
      </NavLink>
      <div className="flex items-center space-x-10">
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

      {/* {user?.email ? (
        <div>
          <form className="flex items-center justify-center" onSubmit={search}>
        <input
          type="text"
          className="text-xl bg-transparent border-b-2 border-b-slate-300 focus:outline-none w-2/3"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button type="submit">
          <MagnifyingGlassIcon className="w-8 h-8" />
        </button>
      </form>

          <button
            onClick={handleLogOut}
            className="text-[#FFFDE3] px-6 py-2 rounded cursor-pointer bg-cyan-600 "
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <NavLink to="/signIn">
            <button className="text-[#FFFDE3] pr-4">Sign In</button>
          </NavLink>
          <NavLink to="/signUp">
            <button className="text-[#FFFDE3] px-6 py-2 rounded cursor-pointer bg-cyan-600 ">
              Sign Up
            </button>
          </NavLink>
        </div>
      )} */}

      <form className="flex items-center justify-center" onSubmit={search}>
        <input
          type="text"
          className="text-xl bg-transparent border-b-2 border-b-slate-300 focus:outline-none w-2/3"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button type="submit">
          <MagnifyingGlassIcon className="w-8 h-8" />
        </button>
      </form>
    </nav>
  );
}

export default Nav;