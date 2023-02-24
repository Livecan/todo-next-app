import { NextPage } from "next";
import { useRouter } from "next/router";
import ListViewContainer from "@/src/containers/listViewContainer";
import ListViewHeadingContainer from "@/src/containers/listViewHeadingContainer";
import useAppNavigation from "@/src/hooks/useAppNavigation";
import FilterValueType from "@/src/types/filterValueType";

const TodoList: NextPage = () => {
  const { query } = useRouter();
  const { redirectCreateTodoItem, redirectViewTodoList, redirectViewTodoItem } =
    useAppNavigation();

  const {
    listId: id,
    filter = "all",
    search,
  } = query as {
    listId: string;
    filter?: FilterValueType;
    search?: string;
  };

  return (
    <>
      <ListViewHeadingContainer
        id={id}
        onCreateItem={redirectCreateTodoItem}
        filter={filter}
        onChangeFilter={(filter: FilterValueType) =>
          redirectViewTodoList(id, { filter, search })
        }
        search={search}
        onSearchChange={(search: string) =>
          redirectViewTodoList(id, { filter, search })
        }
      />
      <ListViewContainer
        id={id}
        filter={filter}
        search={search}
        onViewItem={(todoItemId: string) =>
          redirectViewTodoItem(id, todoItemId)
        }
      />
    </>
  );
};

export default TodoList;
