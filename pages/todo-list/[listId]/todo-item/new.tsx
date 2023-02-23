import ItemFormContainer from "@/src/containers/itemFormContainer";
import useAppNavigation from "@/src/hooks/useAppNavigation";
import { NextPage } from "next";
import { useRouter } from "next/router";

const CreateNewTodoItemPage: NextPage = () => {
  const { query } = useRouter();
  const { redirectViewTodoList } = useAppNavigation();

  const listId = query.listId as string;

  return <ItemFormContainer listId={listId} onCreated={redirectViewTodoList} />;
};

export default CreateNewTodoItemPage;
