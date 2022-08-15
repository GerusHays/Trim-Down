import React from "react";
import { Navigate, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

import Budget from "./sub-components/budget";
import Remaining from "./sub-components/remaining";
import ExpenseTotal from "./sub-components/expenseTotal";
import { AppProvider } from "../context/AppContext";
import ExpenseList from "./sub-components/ExpenseList";
import AddExpenseForm from "./sub-components/AddExpenseForm";

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
        </div>
        <AppProvider>
          <div className="container">
            <h1 className="mt-3">Budget planner</h1>
            <div className="row mt-3">
              <div className="col-sm">
                <Budget />
              </div>
              <div className="col-sm">
                <Remaining />
              </div>
              <div className="col-sm">
                <ExpenseTotal />
              </div>
            </div>
            <h3 className="mt-3">Expenses</h3>
            <div className="row mt-3">
              <div className="col-sm">
                <ExpenseList />
              </div>
            </div>
            <h3 className="mt-3">Add Expense</h3>
            <div className="mt-3">
              <div className="col-sm">
                <AddExpenseForm />
              </div>
            </div>
          </div>
        </AppProvider>
      </div>
    );
  }
};

export default Profile;
