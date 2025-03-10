import React from "react";
import { Security } from "@okta/okta-react";
import oktaAuth from "../../okta.config";

const OktaAuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const restoreOriginalUri = async (_oktaAuth: any, originalUri: string) => {
    window.history.replaceState(null, "", originalUri || "/dashboard");
  };
  
  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      {children}
    </Security>
  );
};

export default OktaAuthProvider;
