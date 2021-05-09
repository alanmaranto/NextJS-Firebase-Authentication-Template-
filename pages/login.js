import React, { useState } from "react";
import firebase from "../firebase";
import { useRouter } from "next/router";
import Form from "../components/Form";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const router = useRouter();

  const register = async () => {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(registerEmail, registerPassword);

      console.log("user", user);
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  const login = async () => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(loginEmail, loginPassword);

      console.log("user", user);
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center pt-4 display-4">Login / Register</h2>
      <div className="row">
        <Form
          email={loginEmail}
          password={loginPassword}
          setPassword={setLoginPassword}
          setEmail={setLoginEmail}
          btnName="Login"
          handleSubmit={login}
        />
        <Form
          email={registerEmail}
          setEmail={setRegisterEmail}
          password={registerPassword}
          setPassword={setRegisterPassword}
          btnName="Register"
          handleSubmit={register}
        />
      </div>
    </div>
  );
};

export default Login;
