import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import { DragontailProvider } from "dragontail-experimental";
import { SilentProvider } from "../lib/silentContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <DragontailProvider theme="dark">
      <SilentProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SilentProvider>
    </DragontailProvider>
  );
};

export default App;
