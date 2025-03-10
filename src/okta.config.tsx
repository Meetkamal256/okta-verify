const oktaConfig = {
  clientId: "0oanr0z68mdPcEwQf5d7",
  issuer: "https://dev-04974889.okta.com/oauth2/ausnr11h6wUtWoKPf5d7",
  redirectUri: "http://localhost:5173/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
};

export default oktaConfig;
