import { NextPage } from "next";
import { useRouter } from "next/router";
import ListViewContainer from "@/src/containers/listViewContainer";

const TodoList: NextPage = () => {
  const { query } = useRouter();

  return <ListViewContainer id={query.listId as string} />;
};

export default TodoList;
