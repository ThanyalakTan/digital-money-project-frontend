import './Signup.css'

const Signup = () => {
  return (
    <div className="signup-page">
      <div className='signup-detail'>
        <div className="signup-header">
          <h3>Sign Up</h3>
          <p>Already member?
            <span>
              <a href="/">Log In</a>
            </span>
          </p>
        </div>
        <div className="signup-form">
          <form className="input-form">
            <h3>Firstname <span>*</span></h3>
            <input type="text"></input>
            <h3>Lastname <span>*</span></h3>
            <input type="text"></input>
            <h3>E-Mail <span>*</span></h3>
            <input type="email"></input>
            <h3>Password <span>*</span></h3>
            <input type="password"></input>
            <h3>Confirm Password <span>*</span></h3>
            <input type="password"></input>
            <h3>Birthdate <span>*</span></h3>
            <input type="date"></input>
            <div className='signup-btn'>
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signup;