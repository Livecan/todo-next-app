import React, { useCallback, useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBarContainer from "../containers/appBarContainer";
import ListsDrawerContainer from "../containers/listsDrawerContainer";
import useAppNavigation from "../hooks/useAppNavigation";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useRemoveTodoListMutation } from "../api/queries";

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const { redirectDashboard, redirectViewTodoList, redirectCreateTodoList } =
    useAppNavigation();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const { mutate, status } = useRemoveTodoListMutation();

  const [listToDelete, setListToDelete] = useState<string>();

  const toggleDrawerOpen = useCallback(
    (open?: boolean) => {
      setDrawerOpen((drawerOpen) =>
        typeof open === "boolean" ? open : !drawerOpen
      );
    },
    [setDrawerOpen]
  );

  useEffect(() => {
    if (status === "success") {
      setListToDelete(undefined);
      redirectDashboard();
    }
  }, [status, redirectDashboard]);

  return (
    <>
      <AppBarContainer>
        <IconButton onClick={() => toggleDrawerOpen()}>
          <MenuIcon />
        </IconButton>
      </AppBarContainer>
      <Dialog
        open={listToDelete !== undefined}
        onClose={() => setListToDelete(undefined)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Do you really want to remove the todo list?
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => mutate(listToDelete!)}>Yes</Button>
          <Button onClick={() => setListToDelete(undefined)} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
      <ListsDrawerContainer
        open={drawerOpen}
        toggleOpen={toggleDrawerOpen}
        viewList={redirectViewTodoList}
        createList={redirectCreateTodoList}
        deleteList={setListToDelete}
      />
      {props.children}
    </>
  );
};

export default Layout;
