import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  CircularProgress,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../src/api/queries";
import Layout from "../src/layouts/layout";
import { useRouter } from "next/router";
import ErrorBoundary from "@/src/components/ErrorBoundary";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const { isReady, query } = useRouter();

  return (
    <>
      <CssBaseline />
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={darkTheme}>
            <Layout>
              {/* @todo Figure out why isReady needs to go together with query
            object for pages that don't receive query params */}
              {isReady && typeof query === "object" ? (
                <Component {...pageProps} />
              ) : (
                <Box
                  display="flex"
                  height="100px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CircularProgress />
                </Box>
              )}
            </Layout>
          </ThemeProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}
