import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/Navbar";
import { Provider } from "../context/user";
import FirebaseAuthState from "../components/FirebaseAuthState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider>
        <FirebaseAuthState>
          <Navbar />
          <ToastContainer />
          <Component {...pageProps} />
        </FirebaseAuthState>
      </Provider>
    </>
  );
}
