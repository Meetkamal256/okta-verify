import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LoginCallback, Security, useOktaAuth } from "@okta/okta-react";
import Dashboard from "./pages/Dashboard";
import oktaAuth from "./okta.config";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { JSX } from "react";

// Custom ProtectedRoute Component
const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const { authState } = useOktaAuth();
  
  if (!authState) return <p>Loading...</p>;
  return authState.isAuthenticated ? element : <Navigate to="/" />;
};

const App = () => {
  const navigate = useNavigate();
  
  return (
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={(_oktaAuth, originalUri) => {
        navigate(originalUri || "/");
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login/callback" element={<LoginCallback />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
      </Routes>
    </Security>
  );
};

export default App;
