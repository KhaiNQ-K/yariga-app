import { axiosClient } from "@/api-client";
import { EmptyLayout } from "@/components/layout";
import { AppPropsWithLayout } from "@/models";
import "@/styles/globals.css";
import { SWRConfig } from "swr";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosClient.get(url),
        shouldRetryOnError: false,
      }}
    >
      <Layout>
        <ThemeProvider theme={{}}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </SWRConfig>
  );
}
