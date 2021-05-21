import { useRouter } from "next/router";
import React from "react";
import { Provider } from "urql";
import { AuthProvider } from "../component/AuthReducer/context";
import Sidebar from "../component/sidebar/sidebar";
import "../styles/global.scss";
import { urqlClient } from "../utils/client";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Provider value={urqlClient}>
      <AuthProvider>
        {router.pathname.includes("/auth") ? (
          <Component {...pageProps} />
        ) : (
          <Sidebar>
            <Component {...pageProps} />
          </Sidebar>
        )}
      </AuthProvider>
    </Provider>
  );
}
export default MyApp;
