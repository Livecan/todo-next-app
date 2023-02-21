import React, { useCallback, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import AppBarContainer from "../containers/appBarContainer";
import ListsDrawerContainer from "../containers/listsDrawerContainer";

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen((drawerOpen) => !drawerOpen);
  }, [setDrawerOpen]);

  return (
    <>
      <AppBarContainer>
        <IconButton onClick={toggleDrawerOpen}>
          <MenuIcon />
        </IconButton>
      </AppBarContainer>
      <ListsDrawerContainer open={drawerOpen} toggleOpen={toggleDrawerOpen} />
      {props.children}
    </>
  );
};

export default Layout;
