import React from "react";

function Register() {
  return (
    <div>
      <h1> Welcome to Registration Page for Buyer </h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Phone number:
          <input type="text" name="phoneNumber" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <label>
          Confirm password:
          <input type="text" name="confirmPassword" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Register;
