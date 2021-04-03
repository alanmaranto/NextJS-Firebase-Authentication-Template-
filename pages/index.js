import React, { useContext } from "react";
import { UserContext } from "../context/user";

const Home = () => {
  const { state } = useContext(UserContext);
  return (
    <>
      <div>Home</div>
      <div>{JSON.stringify(state)}</div>
    </>
  );
};

export default Home;
