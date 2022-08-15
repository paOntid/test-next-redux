import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store";
import UserLayouts from "../layouts/UserLayouts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserLayouts>
      <Component {...pageProps} />
    </UserLayouts>
  );
}

export default wrapper.withRedux(MyApp);
