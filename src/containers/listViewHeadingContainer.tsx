import { useMemo } from "react";
import { useGetTodoListsQuery } from "../api/queries";
import ListViewHeading from "../components/listViewHeading";
import FilterValueType from "../types/filterValueType";

interface ListViewHeadingContainerProps {
  id: string;
  onCreateItem: (id: string) => unknown;
  filter: FilterValueType;
  onChangeFilter: (filter: FilterValueType) => unknown;
}

const ListViewHeadingContainer: React.FC<ListViewHeadingContainerProps> = (
  props
) => {
  const { id } = props;

  // Because of caching kicking in, it is better to load all todo lists here
  // rather than making a separate API call for each todo list
  const { status, data } = useGetTodoListsQuery();

  const currentList = useMemo(
    () =>
      status === "success" ? data.find((list) => list.id === id) : undefined,
    [status, data, id]
  );

  if (status === "success") {
    return <ListViewHeading name={currentList?.name!} {...props} />;
  } else {
    // @todo
    return "???";
  }
};

export default ListViewHeadingContainer;
