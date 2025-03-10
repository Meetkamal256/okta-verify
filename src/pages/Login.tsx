import { useOktaAuth } from "@okta/okta-react";
import "./login.css";

const Login = () => {
  const { oktaAuth, authState } = useOktaAuth();
  
  const handleLogin = async () => {
    await oktaAuth.signInWithRedirect();
  };
  
  if (authState?.isAuthenticated) {
    window.location.href = "/dashboard"; 
    return null;
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <button onClick={handleLogin}>Login with Okta</button>
      </div>
    </div>
  );
};

export default Login;
