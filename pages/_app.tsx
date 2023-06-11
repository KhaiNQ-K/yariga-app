import { axiosClient } from "@/api-client";
import { EmptyLayout } from "@/components/layout";
import { AppPropsWithLayout } from "@/models";
import "@/styles/globals.css";
import { SWRConfig } from "swr";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Manrope } from "next/font/google";
const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
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
          <main className={manrope.className}>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </Layout>
    </SWRConfig>
  );
}
