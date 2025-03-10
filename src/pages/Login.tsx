import "./login.css"; 

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
