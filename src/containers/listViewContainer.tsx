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
  onViewItem: (itemId: string) => unknown;
}

const ListViewContainer: React.FC<ListViewContainerProps> = (props) => {
  const { id, filter: filterProp, search = "", onViewItem } = props;

  const filter =
    typeof filterProp === "string" && filterProp.length !== 0
      ? filterProp
      : "all";

  const { status, data, error } = useGetTodosQuery(id, { filter, search });

  // Mockapi doesn't support CORS PATCH request - i.e. OPTIONS doesn't return PATCH request.
  const {
    status: markItemCompleteStatus,
    mutate: markItemComplete,
    error: markItemCompleteError,
  } = useEditTodoItemMutation(id);
  const {
    status: removeItemStatus,
    mutate: removeItem,
    error: removeItemError,
  } = useRemoveTodoItemMutation(id);

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

  if (markItemCompleteStatus === "error") {
    throw markItemCompleteError;
  }

  if (removeItemStatus === "error") {
    throw removeItemError;
  }

  if (status !== "error")
    return (
      <ListView
        listId={id}
        todos={filteredItems}
        isLoading={
          status === "loading" ||
          status === "idle" ||
          markItemCompleteStatus === "loading" ||
          removeItemStatus === "loading"
        }
        onMarkItemCompleted={handleMarkItemCompleted}
        onDeleteItem={removeItem}
        onViewItem={onViewItem}
      />
    );
  else {
    throw error;
  }
};

export default ListViewContainer;
