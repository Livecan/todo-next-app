import { Box, TextField } from "@mui/material";
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
    <Box
      component="form"
      noValidate
      display="flex"
      justifyContent="center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField required label="Name" {...register("name")} />
    </Box>
  );
};

export default ListForm;
