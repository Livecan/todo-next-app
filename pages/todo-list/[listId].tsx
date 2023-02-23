import { NextPage } from "next";
import { useRouter } from "next/router";
import ListViewContainer from "@/src/containers/listViewContainer";
import ListViewHeadingContainer from "@/src/containers/listViewHeadingContainer";
import useAppNavigation from "@/src/hooks/useAppNavigation";

const TodoList: NextPage = () => {
  const { query } = useRouter();
  const { redirectCreateTodoItem } = useAppNavigation();

  const id = query.listId as string;

  return (
    <>
      <ListViewHeadingContainer id={id} onCreateItem={redirectCreateTodoItem} />
      <ListViewContainer id={id} />
    </>
  );
};

export default TodoList;
