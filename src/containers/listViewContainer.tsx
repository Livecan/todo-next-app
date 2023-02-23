import { useCallback, useMemo } from "react";
import {
  useEditTodoItemMutation,
  useGetTodosQuery,
  useRemoveTodoItemMutation,
} from "../api/queries";
import ListView from "../components/listView";
import FilterValueType from "../types/filterValueType";

interface ListViewContainerProps {
  id: string;
  filter?: FilterValueType;
  search?: string;
}

const ListViewContainer: React.FC<ListViewContainerProps> = (props) => {
  const { id, filter = "all", search = "" } = props;

  const { status, data } = useGetTodosQuery(id);
  // @todo use these states for loading and disable UI interactions!
  // (pass a loading/disabled prop to the ListView)
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

  const filteredItems = useMemo(
    () =>
      data?.filter(
        (item) =>
          // Filters out items that pass filter and search string.
          (filter === "all" ||
            (filter === "active" && !item.completed) ||
            (filter === "completed" && item.completed)) &&
          (item.title.includes(search) || item.content?.includes(search))
      ) ?? [],
    [data, filter, search]
  );

  return (
    <>
      {status === "success" && (
        <ListView
          listId={id}
          todos={filteredItems}
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
