import { useEffect } from "react";
import { useCreateTodoListMutation } from "../api/queries";
import ListForm from "../components/listForm";

interface ListFormContainerProps {
  onCreated: (listId: string) => unknown;
}

const ListFormContainer: React.FC<ListFormContainerProps> = (props) => {
  const { onCreated } = props;

  const { mutate, status, data } = useCreateTodoListMutation();

  useEffect(() => {
    if (status === "success") {
      onCreated(data.data.id!);
    }
  }, [onCreated, status, data]);

  return <ListForm onSubmit={mutate} disabled={status === "loading"} />;
};

export default ListFormContainer;
