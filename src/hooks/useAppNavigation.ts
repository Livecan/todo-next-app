import { useRouter } from "next/router";
import { useMemo } from "react";
import FilterValueType from "../types/filterValueType";

const useAppNavigation = () => {
  const { push } = useRouter();

  const redirects = useMemo(
    () => ({
      redirectDashboard: () => push("/"),
      redirectViewTodoList: (
        id: string,
        options?: { filter?: FilterValueType; search?: string }
      ) => {
        const { filter, search } = options ?? {};
        return push({
          pathname: `/todo-list/${id}`,
          query: { filter, search },
        });
      },
      redirectCreateTodoList: () => push(`/todo-list/new`),
      redirectCreateTodoItem: (listId: string) =>
        push(`/todo-list/${listId}/todo-item/new`),
      redirectViewTodoItem: (listId: string, todoItemId: string) =>
        push(`/todo-list/${listId}/todo-item/${todoItemId}`),
    }),
    [push]
  );

  return redirects;
};

export default useAppNavigation;
