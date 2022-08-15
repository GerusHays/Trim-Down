import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Expense from "./sub-components/expense";
// import { Link } from "react-router-dom";

// import Budget from "./sub-components/budget";
// import Remaining from "./sub-components/remaining";
// import ExpenseTotal from "./sub-components/expenseTotal";
// import { AppProvider } from "./context/AppContext";
// import ExpenseList from "./sub-components/ExpenseList";
// import AddExpenseForm from "./sub-components/AddExpenseForm";

import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
// import Auth from "../utils/auth";

const Profile = (props) => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || {};
  console.log(user);

  // navigate to personal profile page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Navigate to="/profile" />;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user?.username) {
    return (
      <div>
        <div className="flex-row mb-3">
          <h2 className="bg-dark text-secondary p-3 display-inline-block">
            Viewing {userParam ? `${user.username}'s` : "your"} profile.
          </h2>
          <div className="bg-base-100 ">
            <div className="bg-primary rounded-b-lg py-6">
              <h1 className="text-left px-6 text-white text-2xl">
                Welcome {user.username}
              </h1>
            </div>
            <div className="flex flex-col py-4 w-11/12 md:w-5/6 mx-auto">
              <h1 className="text-left text-2xl pb-2">Statistics</h1>
              <div className="card  bg-white shadow-xl mb-8">
                <div className="card-body">
                  <h2 className="card-title mb-4">
                    Vape Juice <span>{/* <FaChevronDown /> */}</span>
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
        </div>
      </div>
    );
  }
};

export default Profile;
