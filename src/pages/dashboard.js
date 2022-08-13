import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Expense from "./sub-components/expense";
// import { useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// import { QUERY_USER } from "../utils/queries";

// const Profile = () => {
//   const { username: userParam } = useParams();

//   const { loading, data } = useQuery(QUERY_USER, {
//     variables: { username: userParam },
//   });

//   const user = data?.user || {};
// };

function Dashboard() {
  return (
    <div className="bg-base-100 ">
      <div className="bg-primary rounded-b-lg py-6">
        <h1 className="text-left px-6 text-white text-2xl">Welcome John</h1>
        {/* We will want to replace with ${username} */}
      </div>
      <div className="flex flex-col py-4 w-11/12 md:w-5/6 mx-auto">
        <h1 className="text-left text-2xl pb-2">Statistics</h1>
        <div className="card  bg-white shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title mb-4">
              Vape Juice{" "}
              <span>
                <FaChevronDown />
              </span>
            </h2>
            <div className="flex flex-row gap-5 pb-2">
              <p>Sun</p>
              <progress
                class="progress progress-success h-6"
                value="32"
                max="100"
              ></progress>
            </div>
            <div className="flex flex-row gap-5 pb-2">
              <p>Mon</p>
              <progress
                class="progress progress-success h-6"
                value="23"
                max="100"
              ></progress>
            </div>
            <div className="flex flex-row gap-6 pb-2">
              <p>Tue</p>
              <progress
                class="progress progress-success h-6"
                value="42"
                max="100"
              ></progress>
            </div>
            <div className="flex flex-row gap-5 pb-2">
              <p>Wed</p>
              <progress
                class="progress progress-success h-6"
                value="45"
                max="100"
              ></progress>
            </div>
            <div className="flex flex-row gap-6 pb-2">
              <p>Thu</p>
              <progress
                class="progress progress-success h-6"
                value="69"
                max="100"
              ></progress>
            </div>
            <div className="flex flex-row gap-8 pb-2">
              <p>Fri</p>
              <progress
                class="progress progress-success h-6"
                value="46"
                max="100"
              ></progress>
            </div>
            <div className="flex flex-row gap-7 pb-2">
              <p>Sat</p>
              <progress
                class="progress progress-success h-6"
                value="100"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        <h1 className="text-left text-2xl pb-2">Expenses</h1>
        <Expense />
      </div>
    </div>
  );
}

export default Dashboard;
