import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Security, useOktaAuth } from "@okta/okta-react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AuthCallback from "./pages/AuthCallback";
import oktaAuth from "./okta.config";

// Custom ProtectedRoute Component
const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const { authState } = useOktaAuth();
  
  if (!authState) return <p>Loading...</p>;
  return authState.isAuthenticated ? element : <Navigate to="/" />;
};

const App = () => {
  return (
    
      <Security
        oktaAuth={oktaAuth}
        restoreOriginalUri={(oktaAuth, originalUri) =>
          window.location.replace(originalUri || "/")
        }
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login/callback" element={<AuthCallback />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
        </Routes>
      </Security>
  );
};

export default App;
