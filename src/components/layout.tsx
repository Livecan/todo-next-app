import React, { useCallback, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import AppBarContainer from "../containers/appBarContainer";
import ListsDrawerContainer from "../containers/listsDrawerContainer";
import useAppNavigation from "../hooks/useAppNavigation";

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const { redirectViewTodoList, redirectCreateTodoList } = useAppNavigation();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(
    (open?: boolean) => {
      setDrawerOpen((drawerOpen) =>
        typeof open === "boolean" ? open : !drawerOpen
      );
    },
    [setDrawerOpen]
  );

  return (
    <>
      <AppBarContainer>
        <IconButton onClick={() => toggleDrawerOpen()}>
          <MenuIcon />
        </IconButton>
      </AppBarContainer>
      <ListsDrawerContainer
        open={drawerOpen}
        toggleOpen={toggleDrawerOpen}
        viewList={redirectViewTodoList}
        createList={redirectCreateTodoList}
      />
      {props.children}
    </>
  );
};

export default Layout;
