import { useRouter } from "next/router";
import { useMemo } from "react";
import FilterValueType from "../types/filterValueType";

const useAppNavigation = () => {
  const { push } = useRouter();

  const redirects = useMemo(
    () => ({
      redirectDashboard: () => push("/"),
      redirectViewTodoList: (id: string, filter?: FilterValueType) =>
        push({ pathname: `/todo-list/${id}`, query: { filter } }),
      redirectCreateTodoList: () => push(`/todo-list/new`),
      redirectCreateTodoItem: (listId: string) =>
        push(`/todo-list/${listId}/todo-item/new`),
    }),
    [push]
  );

  return redirects;
};

export default useAppNavigation;
