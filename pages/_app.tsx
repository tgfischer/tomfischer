import { AppProps } from "next/app";
import PropTypes from "prop-types";
import { FC } from "react";

import "../src/styles/app.scss";
import "@fontsource/merriweather";
import "@fortawesome/fontawesome-svg-core/styles.css";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
};

export default App;