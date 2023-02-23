import { Container, Divider, Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import { TodoItemSchemaType } from "../schema/todoItem";
import formatDate from "../utils/datetimeFormatter";

const ItemView: React.FC<TodoItemSchemaType> = (props) => {
  const { title, content, deadline, completed } = props;

  const formattedDate = useMemo(() => formatDate(deadline), [deadline]);

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
