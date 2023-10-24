import React, { useContext } from "react";
import { Link, redirect } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";

// React Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const {user, createUser, updateUser} = useContext(AuthContext)
    const handleregister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        if(password.length < 6){
          toast.error("Password must be at least 6 character", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return
        }else if(!/[A-Z]/.test(password)){
          toast.error("Minimum a Capital letter is required", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return
        }else if(!/[0-9]/.test(password)){
          toast.error("You should use at least one number", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          return
        } else if(!/[~,!,@,#,$,%,^,&,*,(,),_,+,},>,.]/.test(password)){
          toast.error("You should use at least one special character", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return;
        }
        createUser(email, password)
        .then(user => {
            console.log(user);
            updateUser(name, photo)
            .then('Update Hoise')
            .catch('Somossa ase')
            toast.success("Registration Successfull", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            form.reset()
            redirect('/')
        })
        .catch(error => {
            console.error(error);
        })
    }
  return (
    <div className="max-w-7xl mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Register now! </h1>
          </div>
          <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-[400px]">
            <form className="card-body" onSubmit={handleregister}>


            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
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
                  Already Have an account?{" "}
                  <span className="text-blue-500">
                    {" "}
                    <Link to="/login">Please Login</Link>{" "}
                  </span>{" "}
                </p>
              </div>
            </form>
            <ToastContainer
                position="Register Success"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
