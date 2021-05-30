import React, { useContext } from "react";
import { UserContext } from "../context/user";

const Home = () => {
  const { state } = useContext(UserContext);
  return (
    <>
      <div className="container">
        <h2>Home</h2>
      </div>
      <p className="lead">This page is for public view. Anyone can access it</p>
      <pre>{JSON.stringify(state, null, 4)}</pre>
    </>
  );
};

export default Home;
