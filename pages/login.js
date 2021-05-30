import React, { useState } from "react";
import { toast } from "react-toastify";
import firebase from "../firebase";
import { useRouter } from "next/router";
import Form from "../components/Form";
import { Button } from "antd";
import { GoogleOutlined, SyncOutlined } from "@ant-design/icons";
import Link from "next/link";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("alanbuyer@gmail.com");
  const [loginPassword, setLoginPassword] = useState("demodemo");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const register = async () => {
    try {
      setLoading(true);
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(registerEmail, registerPassword);

      console.log("user", user);
      router.push("/");
      return user;
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const login = async () => {
    console.log("entre");
    try {
      setLoading(true);
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(loginEmail, loginPassword);

      console.log("user", user);
      router.push("/");

      return user;
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const googleLogin = async () => {
    try {
      const user = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      console.log(user);
      router.push("/");
      return user;
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center pt-4 display-4">
        {loading ? (
          <SyncOutlined spin className="text-danger" />
        ) : (
          " Login / Register"
        )}
      </h2>
      <Button
        className="mb-3 col-md-6 offset-md-3"
        type="danger"
        block
        shape="round"
        icon={<GoogleOutlined />}
        onClick={googleLogin}
        size="large"
      >
        Login with Google
      </Button>
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

      <div className="d-flex">
        <Link href="/reset-password">
          <a className="btn btn-outline-danger btn-sm mt-5">Reset Password</a>
        </Link>
      </div>
    </div>
  );
};

export default Login;
