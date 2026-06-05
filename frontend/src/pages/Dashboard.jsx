import React from "react";
import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.get("/profile", {
        headers: {
          Authorization: token,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error.response?.data);
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Hey, {user?.fullName} </h1>

        {user && (
          <>
            <div className="user-info">
              <p>
                <strong>Name:</strong>
                {user.fullName}{" "}
              </p>
              <p>
                <strong>Email:</strong>
                {user.email}{" "}
              </p>
              <p>
                <strong>User:</strong>
                {user.userName}{" "}
              </p>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
