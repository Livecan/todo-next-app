import { useMemo } from "react";
import { useGetTodosQuery } from "../api/queries";
import ItemView from "../components/itemView";

interface ItemViewContainerProps {
  listId: string;
  itemId: string;
}

const ItemViewContainer: React.FC<ItemViewContainerProps> = (props) => {
  const { listId, itemId } = props;

  // @todo Deal with the status
  const { status, data } = useGetTodosQuery(listId);

  const currentItem = useMemo(
    () => data?.find((item) => item.id === itemId),
    [data, itemId]
  );

  if (status === "success") {
    return <ItemView {...currentItem!} />;
  }
  return "Loading";
};

export default ItemViewContainer;
