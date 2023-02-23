import { NextPage } from "next";
import { useRouter } from "next/router";
import ListViewContainer from "@/src/containers/listViewContainer";
import ListViewHeadingContainer from "@/src/containers/listViewHeadingContainer";
import useAppNavigation from "@/src/hooks/useAppNavigation";
import FilterValueType from "@/src/types/filterValueType";

const TodoList: NextPage = () => {
  const { query } = useRouter();
  const { redirectCreateTodoItem, redirectViewTodoList } = useAppNavigation();

  const { listId: id, filter = "all" } = query as {
    listId: string;
    filter?: FilterValueType;
  };

  return (
    <>
      <ListViewHeadingContainer
        id={id}
        onCreateItem={redirectCreateTodoItem}
        filter={filter}
        onChangeFilter={(filter: FilterValueType) =>
          redirectViewTodoList(id, filter)
        }
      />
      <ListViewContainer id={id} filter={filter} />
    </>
  );
};

export default TodoList;
