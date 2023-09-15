import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from '../../assets/assets/images/login/login.svg'
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignup = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .then(err => console.log(err))
    }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img src={img} alt="" className="h-[500px] w-full" />
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>
          <form onSubmit={handleSignup}>
            <div className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign up"
                />
              </div>
            </div>
          </form>
          <p className="text-center my-4">
            Already Have an Account
            <Link to="/login" className="text-orange-400">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
