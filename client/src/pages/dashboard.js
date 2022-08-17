import React, { useState } from "react";
import { FaChevronDown, FaPlus } from "react-icons/fa";
import { Navigate, useParams } from "react-router-dom";
import Expense from "./sub-components/expense";
import ExpenseForm from "./sub-components/ExpenseForm";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";

const Dashboard = (props) => {
  const [showForm, setShowForm] = useState(false);
  const { username: userParam } = useParams();
  const cancelForm = () => { setShowForm(false) };
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || {};
  
  if(Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    
    return <Navigate to="/dashboard" />
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user?.username) {
    return (
      <div>
        <div className="flex-row mb-3">
          <div className="bg-base-100 ">
            <div className="bg-primary rounded-b-lg py-6">
              <h1 className="text-left px-6 text-white text-2xl">
                Welcome {user.username.toUpperCase()}
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
              <button onClick={()=> setShowForm(true)} className="btn w-fit btn-ghost mb-3">
                <FaPlus /><span className="text-lg pt-0.5 px-1 capitalize">Add Expense</span> 
              </button>
              {user.expenses.length ?  (user.expenses.map((expense) => (
                <Expense key={expense._id} expenseName={expense.expenseName} expenseAmount={expense.expenseAmount} expenseDate={expense.expenseDate} />
                ))) : (<p>You have no expenses! Hooray to you! </p>)}

            </div>
              <ExpenseForm onClose={cancelForm} visible={showForm} />
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
