import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../AuthContext/AuthProvider";

const Header = () => {
  const { user, logout, updateUser } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Log Out Success");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addproduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/cart">My Cart</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-base-600 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex gap-2">
          <div className="flex items-center gap-2">
              <img className="w-[30px] rounded-xl" src={user?.photoURL} alt="" />
            <p>{user?.displayName}</p>
          </div>
          {user && (
            <a onClick={handleLogout} className="btn">
              {" "}
              Logout{" "}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
