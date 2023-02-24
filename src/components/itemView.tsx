import { Container, Divider, Skeleton, Stack, Typography } from "@mui/material";
import { TodoItemSchemaType } from "../schema/todoItem";
import formatDate from "../utils/datetimeFormatter";

type ItemViewProps =
  | { isLoading: true }
  | (TodoItemSchemaType & {
      isLoading: false;
    });

const ItemViewSkeleton = () => (
  <Container maxWidth="xs">
    <Skeleton variant="rectangular" height="40px" />
    <Divider />
    <Skeleton variant="text" />
    <Skeleton variant="text" />
    <Skeleton variant="text" />
  </Container>
);

const ItemView: React.FC<ItemViewProps> = (props) => {
  const { isLoading } = props;

  if (isLoading) {
    return <ItemViewSkeleton />;
  }

  const { title, content, deadline, completed } = props;

  const formattedDate = formatDate(deadline);

  return (
    <Container maxWidth="xs">
      <Stack spacing={2} mt={2}>
        <Typography variant="h4" mt="2">
          {title}
        </Typography>
        <Divider />
        <Typography variant="body1">{content}</Typography>
        <Typography>{formattedDate}</Typography>
        <Typography>Status: {completed ? "Completed" : "Active"}</Typography>
      </Stack>
    </Container>
  );
};

export default ItemView;
