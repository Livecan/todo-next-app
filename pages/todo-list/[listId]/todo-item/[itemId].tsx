import ItemViewContainer from "@/src/containers/itemViewContainer";
import { NextPage } from "next";
import { useRouter } from "next/router";

const TodoItemViewPage: NextPage = () => {
  // @todo Make some sort of link to this component
  const { query } = useRouter();

  const { listId, itemId } = query as { listId: string; itemId: string };

  return <ItemViewContainer listId={listId} itemId={itemId} />;
};

export default TodoItemViewPage;
