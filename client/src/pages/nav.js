import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Nav(props) {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>{" "}
            {/* label */}
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><Link to={'/about'}>About Us</Link></li>
              <li><Link to={'/about'}>Contact Us</Link></li>
            </ul>{" "}
            {/* List */}
          </div>{" "}
          {/* dropdown */}
        </div>{" "}
        {/* navbar-start */}
        <div className="navbar-center">
          <Link className="btn btn-ghost normal-case text-xl logo" to={'/'}>
            TrimDown
            <img
              src={require("../assets/images/coin.png")}
              alt="coin"
              className="max-w-[20px] "
            />
          </Link>
        </div>{" "}
        {/* navbar-center */}
        <div className="navbar-end">
          <div class="dropdown dropdown-end">
            <label tabIndex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="coin" />
              </div>
            </label>
            <ul
              tabIndex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Auth.loggedIn() ? (
                <>
                  <li><Link to={"/dashboard"}>Dashboard</Link></li>
                  <li><a href="/profile">Profile</a></li>
                  <li><a>Settings</a></li>
                  <li><a href="/" onClick={logout}>Logout</a></li>
                </>
                
              ): (
                <>
                  <li><Link to={"/login"}>Login</Link></li>
                  <li><Link to={"/signup"}>Sign Up</Link></li>
                </>
              )}
            </ul>
          </div>{" "}
          {/* dropdown user */}
        </div>{" "}
        {/* navbar-end div*/}
      </div>{" "}
      {/* end of navbar */}
    </>
  );
}

export default Nav;
