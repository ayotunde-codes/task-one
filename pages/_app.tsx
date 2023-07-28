import "../styles/globals.css";
import React from "react";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
