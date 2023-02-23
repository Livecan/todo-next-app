import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import todoListSchema, { TodoListSchemaType } from "../schema/todoList";
import { useForm } from "react-hook-form";

interface ListFormProps {
  onSubmit: (todoList: TodoListSchemaType) => unknown;
}

const ListForm: React.FC<ListFormProps> = (props) => {
  const { onSubmit } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoListSchemaType>({
    resolver: yupResolver(todoListSchema),
  });

  return (
    <Container
      component="form"
      maxWidth="xs"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing={2} mt={2}>
        <Typography variant="h4" mt="2">
          New Todo list
        </Typography>
        <TextField
          required
          fullWidth
          label="Name"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <Button type="submit" variant="outlined">
          Create list
        </Button>
      </Stack>
    </Container>
  );
};

export default ListForm;
