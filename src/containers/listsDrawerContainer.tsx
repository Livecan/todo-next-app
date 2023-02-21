import ListsDrawer from "../components/listsDrawer";

const TODO_LISTS = [
  { id: "0", name: "List 1" },
  { id: "123", name: "List 2" },
  { id: "12345", name: "List 3" },
];

interface ListsDrawerContainerProps {
  open: boolean;
  toggleOpen: () => unknown;
}

const ListsDrawerContainer: React.FC<ListsDrawerContainerProps> = (props) => {
  return <ListsDrawer {...props} lists={TODO_LISTS} />;
};

export default ListsDrawerContainer;
