import { async } from "@firebase/util";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [loginemail, setLoginemail] = useState("");
  const [loginepassword, setLoginepassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(loginemail, loginepassword);
      navigate("/account");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <h1 className="hh">Login</h1>
      <div className="sign">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="email.."
            onChange={(e) => setLoginemail(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            type="password"
            placeholder="password.."
            onChange={(e) => setLoginepassword(e.target.value)}
          />
          <br></br>
          <br></br>
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account? <Link to="/register">Sign Up</Link>{" "}
          </p>
          <Link></Link>
        </form>
      </div>
    </>
  );
}
