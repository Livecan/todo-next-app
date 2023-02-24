import { Grid, Typography } from "@mui/material";
import { TodoItemSchemaType } from "../schema/todoItem";
import ItemSummary from "./itemSummary";
import LoaderModal from "./LoaderModal";

export interface ListViewProps {
  listId: string;
  todos: TodoItemSchemaType[];
  isLoading?: boolean;
  onMarkItemCompleted: (id: string) => unknown;
  onDeleteItem: (id: string) => unknown;
  onViewItem: (itemId: string) => unknown;
}

/**
 * Displays the todo items as received via props.
 */
const ListView: React.FC<ListViewProps> = (props) => {
  const {
    listId,
    todos,
    isLoading = false,
    onMarkItemCompleted,
    onDeleteItem,
    onViewItem,
  } = props;

  if (isLoading) {
    return <LoaderModal open={true} />;
  }

  if (todos.length === 0) {
    // @todo Consider something smarter?
    return <Typography>There are no @todo items in the list...</Typography>;
  }

  return (
    <Grid container spacing={2} padding={2}>
      {todos.map((todoItem) => (
        <Grid item xs={12} sm={6} md={4} key={todoItem.id}>
          <ItemSummary
            {...todoItem}
            onMarkCompleted={onMarkItemCompleted}
            onDelete={onDeleteItem}
            onViewItem={onViewItem}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListView;
