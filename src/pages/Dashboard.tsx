import { useOktaAuth } from "@okta/okta-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!authState?.isAuthenticated) {
      navigate("/"); 
    }
  }, [authState, navigate]);
  
  if (!authState?.isAuthenticated) {
    return <p>Redirecting to login...</p>;
  }
  
  return (
    <div className="dashboard-container">
      <h2>Welcome to the Dashboard</h2>
      <p>This is a protected page. You need to be logged in to access it.</p>
      <button onClick={() => oktaAuth.signOut()}>Logout</button>
    </div>
  );
};

export default Dashboard;
