import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyProjects = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return <div>my-projects</div>;
};

export default MyProjects;
