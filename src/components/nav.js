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
    <div class="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col bg-primary">
        <div class="w-full navbar bg-base-100">
        <div class="flex-1 px-2 mx-2 logo">TrimDown</div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-4" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal">{list}</ul>
          </div>
        </div>
        <p className="text-white">Hello There</p>
      </div>
      
      <div class="drawer-side">
        <label for="my-drawer-4" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">{list}</ul>
      </div>
    </div>
  );
}

export default Nav;
