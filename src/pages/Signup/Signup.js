const Signup = () => {
  return (
    <form className="signup-page">
      <label>Firstname</label>
      <input type="text"></input>
      <label>Lastname</label>
      <input type="text"></input>
      <label>E-Mail</label>
      <input type="email"></input>
      <label>Password</label>
      <input type="password"></input>
      <label>Confirm Password</label>
      <input type="password"></input>
      <label>Birthdate</label>
      <input type="date"></input>
    </form>
  );
}
export default Signup;