import { useEffect } from "react";
import { useCreateTodoItemMutation } from "../api/queries";
import ItemForm from "../components/itemForm";

interface ItemFormContainerProps {
  listId: string;
  onCreated: (listId: string) => unknown;
}

const ItemFormContainer: React.FC<ItemFormContainerProps> = (props) => {
  const { listId, onCreated } = props;

  const { mutate, status, error } = useCreateTodoItemMutation(listId);

  useEffect(() => {
    if (status === "success") {
      onCreated(listId);
    }
  }, [onCreated, status, listId]);

  // @todo Try to figure out why this component gets mount-dismount-mount when mounting

  if (status !== "error") {
    return <ItemForm onSubmit={mutate} disabled={status === "loading"} />;
  } else {
    throw error;
  }
};

export default ItemFormContainer;
