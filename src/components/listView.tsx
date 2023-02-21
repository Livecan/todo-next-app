import { Grid, Stack } from "@mui/material";
import ItemSummary, { todoItem } from "./itemSummary";

export interface ListViewProps {
  listId: string;
  todos: todoItem[];
}

/**
 * Displays the todo items as received via props.
 */
const ListView: React.FC<ListViewProps> = (props) => {
  const { listId, todos } = props;

  return (
    <Grid container spacing={2} padding={2}>
      {todos.map((todoItem) => (
        <Grid item spacing={2} xs={12} sm={4} md={3} key={todoItem.id}>
          <ItemSummary {...todoItem} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListView;
