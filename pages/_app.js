import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/Navbar";
import { Provider } from "../context/user";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
