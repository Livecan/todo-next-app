import { useGetTodoListsQuery } from "../api/queries";
import ListsDrawer from "../components/listsDrawer";

interface ListsDrawerContainerProps {
  open: boolean;
  toggleOpen: () => unknown;
  viewList: (listId: string) => unknown;
  createList: () => unknown;
  deleteList: (id: string) => unknown;
}

const ListsDrawerContainer: React.FC<ListsDrawerContainerProps> = (props) => {
  const { status, data, error } = useGetTodoListsQuery();

  if (status !== "error") {
    return (
      <ListsDrawer
        {...props}
        lists={data ?? []}
        isLoading={status === "loading" || status === "idle"}
      />
    );
  } else {
    throw error;
  }
};

export default ListsDrawerContainer;
