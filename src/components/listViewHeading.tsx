import {
  Button,
  Stack,
  Typography,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { TodoListSchemaType } from "../schema/todoList";
import FilterValueType from "../types/filterValueType";

type ListViewHeadingProps = TodoListSchemaType & {
  onCreateItem: (id: string) => unknown;
  filter: FilterValueType;
  onChangeFilter: (filter: FilterValueType) => unknown;
};

const ListViewHeading: React.FC<ListViewHeadingProps> = (props) => {
  const { id, name, onCreateItem, filter, onChangeFilter } = props;

  return (
    <Stack padding={2} direction="row">
      <Typography variant="h4" flexGrow={1}>
        {name}
      </Typography>
      <Box minWidth={150}>
        <Select
          fullWidth
          label="Filter"
          value={filter ?? "all"}
          onChange={(event) =>
            onChangeFilter(event.target.value as FilterValueType)
          }
        >
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
          <MenuItem value="all">All</MenuItem>
        </Select>
      </Box>
      <Button variant="outlined" onClick={() => onCreateItem(id!)}>
        <AddIcon />
        <Typography>Add Todo item</Typography>
      </Button>
    </Stack>
  );
};

export default ListViewHeading;
