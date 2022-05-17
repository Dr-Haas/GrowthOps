import { Fragment } from "react";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <PreLoader />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
