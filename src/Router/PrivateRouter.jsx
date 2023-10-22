import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <>
        <div className="w-full h-full flex justify-center items-center">
          <span className="loading loading-ball loading-lg"></span>
        </div>
      </>
    );
  }

  if(user){
      return children
  }

  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRouter;
