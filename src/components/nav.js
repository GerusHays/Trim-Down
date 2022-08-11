import React from "react";

const navList = ["About", "Login", "Dashboard"];

function Nav(props) {
  const list = navList.map((item) => {
    return (
      <li key={item}>
        <button onClick={() => props.setCurrentPage(item)}>{item}</button>
      </li>
    );
  });

  return (
    <>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabindex="0" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label> {/* label */}
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {list}
              </ul> {/* List */}
            </div> {/* dropdown */}
          </div> {/* navbar-start */}

          <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl logo">TrimDown</a>
          </div> {/* navbar-center */}
          
          <div className="navbar-end">
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a class="justify-between">Profile</a></li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div> {/* dropdown user */}
          </div> {/* navbar-end div */}
        </div> {/* end of navbar */}
        
    </>
  );
}

export default Nav;
