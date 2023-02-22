import ListFormContainer from "@/src/containers/listFormContainer";
import useAppNavigation from "@/src/hooks/useAppNavigation";
import { NextPage } from "next";

const CreateNewTodoListPage: NextPage = () => {
  const { redirectViewTodoList } = useAppNavigation();

  return <ListFormContainer onCreated={redirectViewTodoList} />;
};

export default CreateNewTodoListPage;
