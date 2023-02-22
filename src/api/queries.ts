import { QueryClient, useQuery } from "react-query";
import axios from "axios";
import { TodoItemSchemaType } from "../schema/todoItem";
import { TodoListSchemaType } from "../schema/todoList";

export const queryClient = new QueryClient();

export const useGetTodoListsQuery = () =>
  useQuery<TodoListSchemaType[]>("todo-lists", () =>
    axios
    // @todo Move the API endpoints into .env files!
      .get("https://63f4bd653f99f5855db63c3d.mockapi.io/API/v1/todo-lists")
      .then((res) => res.data)
  );

export const useGetTodosQuery = (listId: string) =>
  useQuery<TodoItemSchemaType[]>(`todo-items ${listId}`, () =>
    axios
      .get(
        `https://63f4bd653f99f5855db63c3d.mockapi.io/API/v1/todo-lists/${listId}/todo-items`
      )
      .then((res) =>
        res.data.map((todoItem: any) => ({
          ...todoItem,
          deadline: new Date(todoItem.deadline),
        }))
      )
  );
