import { QueryClient, useQuery } from "react-query";
import axios from "axios";
import { TodoItemSchemaType } from "../schema/todoItem";
import { TodoListSchemaType } from "../schema/todoList";

const customAxois = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
export const queryClient = new QueryClient();

export const useGetTodoListsQuery = () =>
  useQuery(
    "todo-lists",
    () =>
      customAxois
        .get<TodoListSchemaType[]>(`/API/v1/todo-lists`)
        .then((res) => res.data),
    { retry: false }
  );

export const useGetTodosQuery = (listId: string) =>
  useQuery<TodoItemSchemaType[]>(`todo-items ${listId}`, () =>
    customAxois
      .get<(TodoItemSchemaType & { deadline: number })[]>(
        `/API/v1/todo-lists/${listId}/todo-items`
      )
      .then((res) =>
        res.data.map((todoItem) => ({
          ...todoItem,
          deadline: new Date(todoItem.deadline),
        }))
      )
  );
