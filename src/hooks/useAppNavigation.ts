import { useRouter } from "next/router";
import { useMemo } from "react";

const useAppNavigation = () => {
  const { push } = useRouter();

  const redirects = useMemo(
    () => ({
      redirectDashboard: () => push("/"),
      redirectViewTodoList: (id: string) => push(`/todo-list/${id}`),
    }),
    [push]
  );

  return redirects;
};

export default useAppNavigation;
