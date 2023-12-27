import React from 'react'
import './register.css'
function Register() {
  return (
    <>
   
    <div className="body-content">
      <div className="module">
        <h1>Create an account</h1>
        <form
          className="form"
          action="form.php"
          method="post"
          encType="multipart/form-data"
          autoComplete="off"
        >
          <div className="alert alert-error" />
          <input
            type="text"
            placeholder="User Name"
            name="username"
            required=""
          />
          <input type="email" placeholder="Email" name="email" required="" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="new-password"
            required=""
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmpassword"
            autoComplete="new-password"
            required=""
          />
          <div className="avatar">
            <label>Select your avatar: </label>
            <input type="file" name="avatar" accept="image/*" required="" />
          </div>
          <input
            type="submit"
            defaultValue="Register"
            name="register"
            className="btn btn-block btn-primary"
          />
        </form>
      </div>
    </div>
  </>
  
  )
}

export default Register