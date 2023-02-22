import { useEffect } from "react";
import { useGetTodosQuery } from "../api/queries";
import ListView from "../components/listView";

interface ListViewContainerProps {
  id: string;
}

const ListViewContainer: React.FC<ListViewContainerProps> = (props) => {
  const { id } = props;

  const { status, data } = useGetTodosQuery(id);

  return (
    <>
      {status === "success" && <ListView listId={id} todos={data} />}
      {/* @todo Add loader or skeleton or something */}
      {status === "loading" || (true && "Loading...")}
    </>
  );
};

export default ListViewContainer;
