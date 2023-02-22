import { useGetTodoListsQuery } from "../api/queries";
import ListsDrawer from "../components/listsDrawer";

interface ListsDrawerContainerProps {
  open: boolean;
  toggleOpen: () => unknown;
}

const ListsDrawerContainer: React.FC<ListsDrawerContainerProps> = (props) => {
  const { status, data } = useGetTodoListsQuery();

  return (
    <>
      {status === "success" && <ListsDrawer {...props} lists={data} />}
      {status === "loading" && "Loading"}
    </>
  );
};

export default ListsDrawerContainer;
