import { OktaAuth } from "@okta/okta-auth-js";

const oktaAuth = new OktaAuth({
  clientId: import.meta.env.VITE_OKTA_CLIENT_ID,
  issuer: import.meta.env.VITE_OKTA_ISSUER,
  redirectUri: import.meta.env.VITE_OKTA_REDIRECT_URI,
  scopes: ["openid", "profile", "email"],
  pkce: true,
  restoreOriginalUri: async (_oktaAuth, originalUri) => {
    window.location.replace(originalUri || "/");
  },
});

export default oktaAuth;
