import React from "react";
//import { useNavigation } from "react-router-dom";

export default function logOut() {
  //const navigate = useNavigation();
  const handleLogout = () => {
    //console.log("Hi from logout");
    localStorage.clear();
    //navigate("/");
    window.location.href = "/";
  };
  return handleLogout;
}
