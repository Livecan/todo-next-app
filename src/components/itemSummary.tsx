import { Card, CardContent, Typography } from "@mui/material";

export interface todoItem {
  id: string;
  title: string;
  content: string;
  deadline: Date;
  completed: boolean;
}

const ItemSummary: React.FC<todoItem> = (props) => {
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
        <Typography variant="body2" noWrap>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemSummary;
