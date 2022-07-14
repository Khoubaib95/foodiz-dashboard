import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import PageLayout from "../src/shared/PageLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </Provider>
  );
}

export default MyApp;
