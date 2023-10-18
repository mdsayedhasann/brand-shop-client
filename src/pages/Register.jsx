import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const handleregister = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
    }
  return (
    <div className="max-w-7xl mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-[400px]">
            <form className="card-body" onSubmit={handleregister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">register</button>
              </div>
              <div>
                <p className="text-center py-2">
                  Don't Have an account?{" "}
                  <span className="text-blue-500">
                    {" "}
                    <Link to="/register">Please Register</Link>{" "}
                  </span>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
