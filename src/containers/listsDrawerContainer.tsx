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

  return (
    <>
      {status === "success" && <ListsDrawer {...props} lists={data} />}
      {/* @todo Figure this out differently */}
      {status === "loading" && "Loading"}
    </>
  );
};

export default ListsDrawerContainer;
