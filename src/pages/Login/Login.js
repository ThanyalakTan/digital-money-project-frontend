import './Login.css'

const Login = () => {
  return (
    <div className="login-page">
      <div className='login-detail'>
        <div className="login-header">
          <h3>Log In</h3>
          <p>Don't have an account?
            <span>
              <a href="/">Sign Up</a>
            </span>
          </p>
        </div>
        <div className="login-form">
          <form className="input-form">
            <h3>E-Mail <span>*</span></h3>
            <input type="email"></input>
            <h3>Password <span>*</span></h3>
            <input type="password"></input>
            <div className='login-btn'>
              <button>Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;