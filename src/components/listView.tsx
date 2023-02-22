import { Grid } from "@mui/material";
import { TodoItemSchemaType } from "../schema/todoItem";
import ItemSummary from "./itemSummary";

export interface ListViewProps {
  listId: string;
  todos: TodoItemSchemaType[];
}

/**
 * Displays the todo items as received via props.
 */
const ListView: React.FC<ListViewProps> = (props) => {
  const { listId, todos } = props;

  if (todos.length === 0) {
    // @todo Consider something smarter?
    return "No TODOs in the list..."
  }

  return (
    <Grid container spacing={2} padding={2}>
      {todos.map((todoItem) => (
        <Grid item xs={12} sm={4} md={3} key={todoItem.id}>
          <ItemSummary {...todoItem} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListView;
