// src/components/LoginForm.jsx
import { useState, useRef, useEffect } from 'react';


const LoginForm = ({ handleLogin }) => {
  const userRef = useRef()
  const errRef = userRef()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState("")
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    useRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [username, password])

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation, you'd typically want to do more here
    if (username && password) {
      handleLogin(username);
    }
  };

  return (
    <>
      <section>
        <p ref={errRef} className={errMsg ? "errmsg" : 'offscren'} aria-live="assertive">
          {errMsg}
        </p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          
        </form>
      </section>
    </>
  );
};

export default LoginForm;
