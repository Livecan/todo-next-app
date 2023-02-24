import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import todoItemSchema, { TodoItemSchemaType } from "../schema/todoItem";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import LoaderModal from "./LoaderModal";

interface ItemFormProps {
  disabled: boolean;
  onSubmit: (todoList: TodoItemSchemaType) => unknown;
}

const ItemForm: React.FC<ItemFormProps> = (props) => {
  const { disabled, onSubmit } = props;

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoItemSchemaType>({
    resolver: yupResolver(todoItemSchema),
  });

  return (
    <Container
      component="form"
      maxWidth="xs"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <LoaderModal open={disabled} />
      <Stack spacing={2} mt={2}>
        <Typography variant="h4" mt="2">
          New Todo item
        </Typography>
        <TextField
          required
          fullWidth
          label="Title"
          {...register("title")}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
        <TextField
          required
          fullWidth
          multiline
          minRows={4}
          label="Content"
          {...register("content")}
          error={!!errors.content}
          helperText={errors.content?.message}
        />
        {/* @todo Consider moving to a separate component */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            value={watch("deadline")}
            onChange={(date) => setValue("deadline", date!)}
            renderInput={(params) => (
              <TextField
                {...params}
                {...register("deadline")}
                required
                fullWidth
                label="Deadline"
              />
            )}
          />
        </LocalizationProvider>
        <Button type="submit" variant="outlined">
          Create Todo item
        </Button>
      </Stack>
    </Container>
  );
};

export default ItemForm;
