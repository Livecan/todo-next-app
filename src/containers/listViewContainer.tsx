import { useCallback } from "react";
import {
  useEditTodoItemMutation,
  useGetTodosQuery,
  useRemoveTodoItemMutation,
} from "../api/queries";
import ListView from "../components/listView";

interface ListViewContainerProps {
  id: string;
}

const ListViewContainer: React.FC<ListViewContainerProps> = (props) => {
  const { id } = props;

  const { status, data } = useGetTodosQuery(id);
  const { status: markItemCompleteStatus, mutate: markItemComplete } =
    useEditTodoItemMutation(id);
  const { status: removeStatus, mutate: removeItem } =
    useRemoveTodoItemMutation(id);

  const handleMarkItemCompleted = useCallback(
    (id: string) => {
      const editedItem = data!.find((item) => item.id === id)!;
      markItemComplete({ ...editedItem, completed: true });
    },
    [data, markItemComplete]
  );

  return (
    <>
      {status === "success" && (
        <ListView
          listId={id}
          todos={data}
          onMarkItemCompleted={handleMarkItemCompleted}
          onDeleteItem={removeItem}
        />
      )}
      {/* @todo Add loader or skeleton or something */}
      {status === "loading" && "Loading..."}
    </>
  );
};

export default ListViewContainer;
