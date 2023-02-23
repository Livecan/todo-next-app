import { useMemo } from "react";
import { Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useGetTodoListsQuery } from "../api/queries";

interface ListViewHeadingContainerProps {
  id: string;
  onCreateItem: (id: string) => unknown;
}

const ListViewHeadingContainer: React.FC<ListViewHeadingContainerProps> = (
  props
) => {
  const { id, onCreateItem } = props;

  // Because of caching kicking in, it is better to load all todo lists here
  // rather than making a separate API call for each todo list
  const { status, data } = useGetTodoListsQuery();

  const currentList = useMemo(
    () =>
      status === "success" ? data.find((list) => list.id === id) : undefined,
    [status, data, id]
  );

  if (status === "success") {
    return (
      <Stack padding={2} direction="row">
        <Typography variant="h4" flexGrow={1}>
          {currentList?.name}
        </Typography>
        <Button variant="outlined" onClick={() => onCreateItem(id)}>
          <AddIcon />
          <Typography>Add Todo item</Typography>
        </Button>
      </Stack>
    );
  } else {
    // @todo
    return "???";
  }
};

export default ListViewHeadingContainer;
