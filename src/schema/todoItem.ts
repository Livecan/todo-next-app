import * as yup from "yup";

const todoItemSchema = yup.object({
  id: yup.string(),
  "todo-listId": yup.string(),
  title: yup.string().required().min(3),
  content: yup.string(),
  deadline: yup.date().required(),
  completed: yup.boolean().default(false),
});

export default todoItemSchema;

export type TodoItemSchemaType = yup.InferType<typeof todoItemSchema>;
