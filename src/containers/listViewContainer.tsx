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

  const { status, data } = useGetTodosQuery(id);
  // @todo use these states for loading and disable UI interactions!
  // (pass a loading/disabled prop to the ListView)

  // Mockapi doesn't support CORS PATCH request - i.e. OPTIONS doesn't return PATCH request.
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

  if (status === "success" || status === "loading")
    return (
      <ListView
        listId={id}
        todos={filteredItems}
        isLoading={status === "loading"}
        onMarkItemCompleted={handleMarkItemCompleted}
        onDeleteItem={removeItem}
        onViewItem={onViewItem}
      />
    );

  // @todo Error handling
};

export default ListViewContainer;
