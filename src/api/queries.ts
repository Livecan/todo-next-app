import { QueryClient, useMutation, useQuery } from "react-query";
import axios from "axios";
import { TodoItemSchemaType } from "../schema/todoItem";
import { TodoListSchemaType } from "../schema/todoList";

const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
export const queryClient = new QueryClient();

// @todo Create appropriate detailed types for all the queries

export const useGetTodoListsQuery = () =>
  useQuery(
    "todo-lists",
    () =>
      customAxios
        .get<TodoListSchemaType[]>(`/API/v1/todo-lists`)
        .then((res) => res.data),
    { retry: false }
  );

export const useCreateTodoListMutation = () =>
  useMutation(
    (todoList: TodoListSchemaType) =>
      customAxios.post<TodoListSchemaType>(`/API/v1/todo-lists`, todoList),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todo-lists");
      },
    }
  );

export const useGetTodosQuery = (listId: string) =>
  useQuery<TodoItemSchemaType[]>(`todo-items ${listId}`, () =>
    customAxios
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

export const useCreateTodoItemMutation = (listId: string) =>
  useMutation(
    (todoItem: TodoItemSchemaType) =>
      customAxios.post<TodoItemSchemaType>(
        `/API/v1/todo-lists/${listId}/todo-items`,
        { ...todoItem, deadline: todoItem.deadline.getTime() }
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(`todo-items ${listId}`);
      },
    }
  );

export const useEditTodoItemMutation = (listId: string) =>
  useMutation(
    (todoItem: TodoItemSchemaType) =>
      customAxios.put<TodoItemSchemaType>(
        `/API/v1/todo-lists/${listId}/todo-items/${todoItem.id}`,
        { ...todoItem, deadline: todoItem.deadline.getTime() }
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(`todo-items ${listId}`);
      },
    }
  );

export const useRemoveTodoItemMutation = (listId: string) =>
  useMutation(
    (todoItemId: string) =>
      customAxios.delete(
        `/API/v1/todo-lists/${listId}/todo-items/${todoItemId}`
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(`todo-items ${listId}`);
      },
    }
  );
