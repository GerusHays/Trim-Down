import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth.js";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    console.log('handleFormSubmit');
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.login.token);
      document.location.replace(`/profile/${data.login.user.username}`);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
          <p class="py-6">Wallet looking slim lately? Sounds like you need to trim down. Are you broke AF? Better signup quickly!</p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control" onSubmit={handleFormSubmit}>
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                className="form-input input input-bordered"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                className="form-input input input-bordered"
                placeholder="******************************"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
            </div>
            <div class="form-control mt-6">
              <button className="btn d-block w-100 btn-primary" type="submit" onClick={handleFormSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
