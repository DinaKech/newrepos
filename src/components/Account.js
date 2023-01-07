import { async } from "@firebase/util";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Account() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const deleteuser = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div>
      myaccount
      <p>User Email: {user?.email}</p>
      <button onClick={deleteuser}>LogOut</button>
    </div>
  );
}
