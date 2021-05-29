import React from "react";
import { parseCookies } from "nookies";
import axios from "axios";

const New = () => {
  return <div>div</div>;
};

export async function getServerSideProps(context) {
  const cookies = parseCookies(context);
  console.log("nookies", cookies);
  const response = await axios.get(`${process.env.api}/private-route`, {
    headers: {
      token: cookies.token,
    },
  });
  console.log("response", response.data);
  return {
    props: {},
  };
}

export default New;
