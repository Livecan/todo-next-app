import React, { useCallback, useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";
import AppBarContainer from "@/src/containers/appBarContainer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListsDrawerContainer from "@/src/containers/listsDrawerContainer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  // @todo Consider if this stays for the whole site or move into a wrapper
  // component.
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen((drawerOpen) => !drawerOpen);
  }, [setDrawerOpen]);

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <AppBarContainer>
          <IconButton onClick={toggleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </AppBarContainer>
        <ListsDrawerContainer open={drawerOpen} toggleOpen={toggleDrawerOpen} />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
