import React from "react";
import Auth from "../utils/auth";


function Nav(props) {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          
        </div>{" "}
        {/* navbar-start */}
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl logo" href="/">
            TrimDown
            <img
              src={require("../assets/images/coin.png")}
              alt="coin"
              className="max-w-[20px] "
            />
          </a>
        </div>{" "}
        {/* navbar-center */}
        <div className="navbar-end">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="profile" class="justify-between">
                  Profile
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              
              <li>
                <>
                  <a href="register">
                    Signup
                  </a>
                </>
              </li>
              <li>
                <>
                  <a href="login">
                    Login
                  </a>
                </>
              </li>
              <li>
                <>
                  <a href="/" onClick={logout}>
                    Logout
                  </a>
                </>
              </li>
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
