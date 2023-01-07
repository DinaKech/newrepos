import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      navigate("/account");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1 className="hh">Sign Up</h1>
      <div className="sign">
        <form onSubmit={handleSubmit}>
          <br />
          <input
            type="email"
            placeholder="email.."
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <br></br>

          <br />
          <input
            type="password"
            placeholder="password.."
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>
          <button onClick={handleSubmit}>Sign Up</button>
        </form>
      </div>
    </>
  );
}
