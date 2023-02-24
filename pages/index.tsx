import { Box, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h1">Roman&apos;s @todo App</Typography>
      <Typography>
        You can continue browsing through @todo lists by clicking on the menu
        icon in the top left corner.
      </Typography>
    </Box>
  );
}
