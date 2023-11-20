import React, { useEffect, useRef, useState } from "react";
import axios from "../api/axios";
import useAuth from "../hook/useAuth";
import { useNavigate, Link, useLocation } from "react-router-dom";
// import useLocalStorage from "../hook/useLocalStorage";
import useInput from "../hook/useInput";
import useToggle from "../hook/useToggle";

const LOGIN_URL = "/auth";

function Login() {
  const { setAuth } = useAuth();  // persist, setPersist

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const userRef = useRef();
  const errRef = useRef();

  const [user, resetUser, userAttribs] = useInput("user", '') //useLocalStorage('user', '') //useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [check, toggleCheck] = useToggle('persist', false)

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;

      setAuth({ user, pwd, roles, accessToken });
      // clear the input filed
      resetUser("");
      setPwd("");
      navigate(from, { replace: true })
    } catch (err) {
      if (!err.response) {
        setErrMsg("No server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  // const togglePersist = () => {
  //   setPersist(prev => !prev)
  // }

  // useEffect(() => {
  //   localStorage.setItem('persist', persist)
  // }, [persist])

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            {...userAttribs}
            // value={user}
            // onChange={(e) => resetUser(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            required
          />
        </label>
        <button disabled={!user || !pwd ? true : false}>Sign In</button>
        <div className="persistCheck">
          <input type="checkbox" id="persist" onChange={togglePersist} checked={persist} />
          <label htmlFor="persist">Trust this device</label>
        </div>

      </form>
      <p>
        Need an Account? <br />
        <span className="line">
          <Link to='/register'>Sign Up</Link>
        </span>
      </p>
    </section>
  );
}

export default Login;
