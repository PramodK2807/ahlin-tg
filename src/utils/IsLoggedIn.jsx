import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const IsLoggedIn = ({ children }) => {
  let location = useLocation();

  const isUserLoggedIn = localStorage.getItem("ahl-admin-token");

  if (!isUserLoggedIn || isUserLoggedIn === undefined) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You are not logged in!",
      showConfirmButton: false,
      timer: 1500,
    })
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default IsLoggedIn;
