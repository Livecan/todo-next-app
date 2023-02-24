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
  const { status, data } = useGetTodoListsQuery();

  if (status === "success" || status === "loading") {
    return (
      <ListsDrawer
        {...props}
        lists={data ?? []}
        isLoading={status === "loading"}
      />
    );
  }

  // @todo Error handling
};

export default ListsDrawerContainer;
