import ListView, { ListViewProps } from "../components/listView";

const TODOS = [
  {
    id: "12",
    title: "Do on Monday",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet, quam eu suscipit vehicula, neque libero ultricies urna, vel egestas lorem nisi in mi. Curabitur at ex porta, suscipit orci in, aliquet nunc. Donec ultrices malesuada est id lacinia. In vitae pharetra ante. Mauris ut blandit risus. Sed varius, nisl id malesuada ullamcorper, quam ipsum elementum elit, vitae sagittis nisi magna eu purus. Sed maximus lorem sit amet semper tempor. Vestibulum ac sem et turpis accumsan convallis vitae sodales purus. In magna urna, aliquam molestie lectus vel, dictum vestibulum orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean vitae neque et enim rutrum facilisis ut eu nibh. Ut aliquet, risus vel finibus dapibus, purus velit vehicula lacus, ut tristique lorem ligula sed ex. Nulla dignissim metus id efficitur venenatis. Morbi volutpat euismod venenatis. Vivamus egestas, nisl nec posuere hendrerit, urna urna sollicitudin diam, eu porta sapien lectus ut lacus.",
    deadline: new Date(2023, 1, 24, 12, 30),
    completed: false,
  },
  {
    id: "45",
    title: "Do dishes",
    content: "Nam tempus consequat condimentum. Praesent euismod lacus ac elit pharetra, ut convallis libero porta. Donec nisl leo, hendrerit vel sollicitudin ut, dignissim et felis. Aliquam blandit massa sit amet lectus semper rhoncus. Nullam varius maximus quam, ac pulvinar tellus. Cras sodales eros sit amet sollicitudin rutrum. Aliquam non lectus ex. Aenean aliquet rhoncus nunc condimentum pretium. Morbi congue, massa ac efficitur ornare, nisl lorem tincidunt mauris, eget blandit nulla purus ac leo. Donec quis cursus massa, tristique fringilla leo. Sed et dolor et ex tincidunt consectetur. Nullam sagittis libero elit, non maximus tellus scelerisque vitae. Cras fringilla sapien eu viverra semper. Mauris tortor quam, facilisis ut luctus ut, rutrum in eros. In sodales urna vel lacus gravida vulputate.",
    deadline: new Date(2023, 1, 22, 12, 30),
    completed: false,
  },
  {
    id: "46",
    title: "Do homework",
    content: "Nullam placerat nulla sem, ut luctus justo mattis id. Quisque vitae turpis lacus. Nulla sit amet ex vitae dolor sodales mattis nec a ligula. Nulla odio neque, congue vitae auctor eget, iaculis ut metus. Morbi elementum sem nec mi congue viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed leo a purus ultricies blandit sed at felis. Proin mauris massa, ultricies sed neque eu, commodo iaculis ipsum. Pellentesque eget risus ut orci suscipit malesuada sit amet ac libero.",
    deadline: new Date(2023, 1, 28, 12, 30),
    completed: true,
  },
  {
    id: "47",
    title: "Fix car",
    content: "And a shorter one to see",
    deadline: new Date(1676980119000),
    completed: false,
  },
];

interface ListViewContainerProps {
  id: string;
}

const ListViewContainer: React.FC<ListViewContainerProps> = (props) => {
  const { id } = props;

  return <ListView listId={id} todos={TODOS} />;
};

export default ListViewContainer;
