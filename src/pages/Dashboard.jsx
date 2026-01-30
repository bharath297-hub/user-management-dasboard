import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const goToUserDetails = () => {
    if (!userId.trim()) {
      alert("Please enter a user ID");
      return;
    }
    navigate(`/users/${userId}`);
  };

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <div className="dashboard-card">
          <h1 className="dashboard-title">Welcome to the Dashboard</h1>
          <p className="dashboard-subtext">
            Use the controls below to manage users.
          </p>

          <div className="button-section">

            <button 
              className="dashboard-btn primary"
              onClick={() => navigate("/add-user")}
            >
              Add New User
            </button>

            <button
              className="dashboard-btn primary"
              onClick={() => navigate("/users")}
            >
              Fetch All Users
            </button>

            <div className="fetch-by-id">
              <input
                type="number"
                placeholder="Enter User ID"
                className="input-id"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />

              <button 
                className="dashboard-btn secondary"
                onClick={goToUserDetails}
              >
                Fetch User By ID
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
