import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { TodoListSchemaType } from "../schema/todoList";
import { useCallback } from "react";

type TodoListItemProps = TodoListSchemaType & {
  viewList: (listId: string) => unknown;
};

const TodoListItem: React.FC<TodoListItemProps> = (props) => {
  const { id, name, viewList } = props;

  return (
    <ListItem>
      <ListItemButton onClick={() => viewList(id!)}>
        <ListItemText>{name}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

interface ListsDrawerProps {
  lists: TodoListSchemaType[];
  open: boolean;
  toggleOpen: (open?: boolean) => unknown;
  viewList: (listId: string) => unknown;
}

const ListsDrawer: React.FC<ListsDrawerProps> = (props) => {
  const { lists, open, toggleOpen, viewList } = props;

  const handleViewList = useCallback(
    (listId: string) => {
      toggleOpen(false);
      viewList(listId);
    },
    [toggleOpen, viewList]
  );

  return (
    <SwipeableDrawer
      variant="temporary"
      open={open}
      onOpen={() => toggleOpen}
      onClose={() => toggleOpen}
    >
      <Box minWidth={200}>
        <List>
          {lists.map((list) => (
            <TodoListItem key={list.id} {...list} viewList={handleViewList} />
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default ListsDrawer;
