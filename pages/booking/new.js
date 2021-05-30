import React from "react";
import { parseCookies } from "nookies";
import axios from "axios";

const New = () => {
  return <div>div</div>;
};

export async function getServerSideProps(context) {
  try {
    const cookies = parseCookies(context);
    console.log("nookies", cookies);
    const response = await axios.get(`${process.env.api}/private-route`, {
      headers: {
        token: cookies.token,
      },
    });
    if (response.data.ok) {
      return { props: {} };
    }
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {}
    };
  }
}

export default New;
