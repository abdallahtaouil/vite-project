import React from 'react'
import './register.css'
function Login() {
  return (
    <div className="body-content">
      <div className="module">
        <h1>Login</h1>
        <form
          className="form"
          action="form.php"
          method="post"
          encType="multipart/form-data"
          autoComplete="off"
        >
          <div className="alert alert-error" />
          
          
          <input type="email" placeholder="Email" name="email" required="" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="new-password"
            required=""
          />
          
         
          <input
            type="submit"
            defaultValue="Login"
            name="Login"
            className="btn btn-block btn-primary"
          />
        </form>
      </div>
    </div>
  )
}

export default Login