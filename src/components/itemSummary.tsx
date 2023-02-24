import {
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { TodoItemSchemaType } from "../schema/todoItem";
import formatDate from "../utils/datetimeFormatter";
import { useMemo } from "react";

type ItemSummaryProps = TodoItemSchemaType & {
  onMarkCompleted: (id: string) => unknown;
  onDelete: (id: string) => unknown;
};

const ItemSummary: React.FC<ItemSummaryProps> = (props) => {
  const { id, title, content, deadline, completed, onMarkCompleted, onDelete } =
    props;

  // @todo Move to utils formatting date
  const formattedDate = useMemo(() => formatDate(deadline), [deadline]);

  return (
    <Card>
      <CardContent>
        <Stack direction="row">
          <Typography variant="h6" flexGrow={1}>
            {title}
          </Typography>
          <IconButton
            aria-label={completed ? "completed" : "mark completed"}
            onClick={() => onMarkCompleted(id!)}
          >
            {completed ? <DoneIcon /> : <AccessAlarmIcon />}
          </IconButton>
          <IconButton aria-label="delete" onClick={() => onDelete(id!)}>
            <DeleteIcon />
          </IconButton>
        </Stack>
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
