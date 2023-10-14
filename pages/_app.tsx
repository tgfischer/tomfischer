import { AppProps } from "next/app";
import PropTypes from "prop-types";

import "../src/styles/app.scss";
import "@fontsource/source-serif-pro";
import "@fortawesome/fontawesome-svg-core/styles.css";

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
};

export default App;
