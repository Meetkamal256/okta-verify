import { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleAuth = async () => {
      try {
        await oktaAuth.handleRedirect();
        navigate("/dashboard"); 
      } catch (error) {
        console.error("Authentication error", error);
      }
    };
    
    if (!authState?.isAuthenticated) {
      handleAuth();
    }
  }, [oktaAuth, authState, navigate]);
  
  return <p>Processing login...</p>;
};

export default AuthCallback;
