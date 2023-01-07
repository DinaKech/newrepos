import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { data } from "./firebase-config";
import { async } from "@firebase/util";
import { auth } from "./firebase-config";
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [user, setUser] = useState([]);
  const [regName, setRegName] = useState("");
  const [regPass, setRegPass] = useState("");
  const [LoginName, setLoginName] = useState("");
  const [LoginPass, setLoginPass] = useState("");
  const [newUSER, setnewUSER] = useState({});

  const CollectionRef = collection(data, "users");

  const REGISTER = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, regName, regPass);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const SIGNIN = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, LoginName, LoginPass);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const SIGNOUT = async () => {
    await signOut(auth);
  };

  const addUser = async () => {
    await addDoc(CollectionRef, { name: newName, age: Number(newAge) });
  };
  const ageing = async (elem) => {
    const updateritem = doc(data, "users", elem.id);
    await updateDoc(updateritem, { age: elem.age + 1 });
  };
  const deleteing = async (elem) => {
    const item = doc(data, "users", elem.id);
    await deleteDoc(item);
  };
  useEffect(() => {
    const getUser = async () => {
      const userdata = await getDocs(CollectionRef);

      setUser(userdata.docs.map((elem) => ({ ...elem.data(), id: elem.id })));
    };
    getUser();
  }, []);
  useEffect(() => {
    onAuthStateChanged(auth, (current) => {
      setnewUSER(current);
    });
  }, []);

  return (
    <>
      <div>
        <p>REGISTER</p>
        {newUSER?.email} <br />
        <input
          placeholder="email"
          onChange={(e) => setRegName(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setRegPass(e.target.value)}
        />
        <button onClick={REGISTER}>Register</button>
      </div>
      <div>
        <p>LOGIN</p>
        <input
          placeholder="email"
          onChange={(e) => setLoginName(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setLoginPass(e.target.value)}
        />
        <button onClick={SIGNIN}>singin</button>
      </div>{" "}
      <div>
        <button onClick={SIGNOUT}>SIGN OUT</button>
      </div>
      <br />
      <br />
      <input
        placeholder="name..."
        onChange={(e) => setNewName(e.target.value)}
      />
      <input placeholder="age..." onChange={(e) => setNewAge(e.target.value)} />
      <button onClick={addUser}>Add</button>
      <div>
        {user.map((elem) => (
          <>
            <div>
              <h1>NAME---- {elem.name}</h1>
              <h1>AGE----- {elem.age}</h1>
              <button onClick={() => ageing(elem)}>incsrese age</button>
              <button onClick={() => deleteing(elem)}>deleteing age</button>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
