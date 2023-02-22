import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { TodoListSchemaType } from "../schema/todoList";

const TodoListItem: React.FC<TodoListSchemaType> = (props) => {
  const { name } = props;

  return (
    <ListItem>
      <ListItemButton>
        <ListItemText>{name}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

interface ListsDrawerProps {
  lists: TodoListSchemaType[];
  open: boolean;
  toggleOpen: () => unknown;
}

const ListsDrawer: React.FC<ListsDrawerProps> = (props) => {
  const { lists, open, toggleOpen } = props;

  return (
    <SwipeableDrawer
      variant="temporary"
      open={open}
      onOpen={toggleOpen}
      onClose={toggleOpen}
    >
      <Box minWidth={200}>
        <List>
          {lists.map((list) => (
            <TodoListItem key={list.id} {...list} />
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default ListsDrawer;
