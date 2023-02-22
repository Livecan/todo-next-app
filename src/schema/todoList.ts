import * as yup from "yup";

const todoListSchema = yup.object({
  id: yup.string(),
  name: yup.string().required().min(3),
});

export default todoListSchema;

export type TodoListSchemaType = yup.InferType<typeof todoListSchema>;
