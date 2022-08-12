import React from "react";

function Dashboard() {
  return (
    <div className="bg-base-100 ">
      <div className="bg-primary rounded-b-lg py-4 mb-6">
        <h1 className="text-left px-6 text-white text-2xl">Welcome John</h1>
      </div>
      <div className="flex flex-col w-full items-center">
      <h1 className="text-left px-6 text-2xl">Statistics</h1>
        <div className="card w-96 md:w-8/12 bg-white shadow-xl mb-8">
          <div className="card-body items-center text-center">
          <progress class="progress progress-info w-56" value="0" max="100"></progress>
          <progress class="progress progress-info w-56" value="10" max="100"></progress>
          <progress class="progress progress-info w-56" value="40" max="100"></progress>
          <progress class="progress progress-info w-56" value="70" max="100"></progress>
          <progress class="progress progress-info w-56" value="100" max="100"></progress>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
