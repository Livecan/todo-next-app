import { Card, CardContent, Typography } from "@mui/material";
import { TodoItemSchemaType } from "../schema/todoItem";

const ItemSummary: React.FC<TodoItemSchemaType> = (props) => {
  const { id, title, content, deadline, completed } = props;

  // @todo Move to utils formatting date
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(deadline);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography>{formattedDate}</Typography>
        {/* @todo Add tooltip on this one */}
        <Typography variant="body2" noWrap>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemSummary;
