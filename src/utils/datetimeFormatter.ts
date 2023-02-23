const datetimeFormat = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});

const formatDate = (date: Date) => datetimeFormat.format(date);

export default formatDate;
