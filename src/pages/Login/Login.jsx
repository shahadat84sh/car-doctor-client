import React, { useContext } from "react";
import img from '../../assets/assets/images/login/login.svg'
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
    const {login} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
        .then( result =>{
            const user = result.user;
            console.log(user);
        })
        .then(err => console.log(err))
        form.reset()
    }

  return (
    <div>
      <Navbar></Navbar>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img src={img} alt="" className="h-[500px] w-full"  />
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleLogin}>
          <div className="card-body">
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
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </div>
          </form>
          <p className="text-center my-4">New to Car Doctor <Link to='/signup' className="text-orange-400">Sign Up</Link></p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
