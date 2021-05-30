import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../context/user/index";
import firebase from "firebase";
import { userTypes } from "../context/types";
import { useRouter } from "next/router";

const Navbar = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(UserContext);
  const router = useRouter();

  const handleLogout = async () => {
    await firebase.auth().signOut();
    dispatch({
      type: userTypes.LOGOUT,
    });
    router.push("/login");
  };
  return (
    <nav className="nav bg-light d-flex justify-content-between">
      <Link href="/">
        <a className="nav-link">Home</a>
      </Link>

      <Link href={user ? "/hotel/new" : "/login"}>
        <a className="nav-link">Submit Hotel</a>
      </Link>

      {user ? (
        <a onClick={handleLogout} className="nav-link">
          Logout
        </a>
      ) : (
        <Link href="/login">
          <a className="nav-link">Login</a>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
