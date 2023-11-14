import React, { useContext, useEffect, useRef, useState } from 'react'
import AuthContext from './context/AuthProvider'


function Login({ handleLogin }) {
  const { setAuth } = useContext(AuthContext)


  const userRef = useRef()
  const errRef = useRef()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus()

  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [username, password])



  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation, you'd typically want to do more here
    if (!username && !password) {
      handleLogin(username);
      setErrMsg('Invalid Entry')
      return
    }
    console.log(username, password);
    setSuccess(true)
    // clear the input filed
    username('')
    password('')
  };

  return (
    <>
      {success ? (<section>
        <h1>Login Successful</h1>
        <p><a href="/">Home</a></p>
      </section>
      ) : (
        <section>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='username'>
              Username:
              <input
                type="text"
                id='username'
                ref={userRef}
                autoComplete='off'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <label htmlFor='password'>
              Password:
              <input
                type="password"
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button

            >
              Sign In
            </button>
          </form>
          <p>
            Need an Account? <br />
            <span className='line'>
              <a href="#">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </>
  )
}

export default Login