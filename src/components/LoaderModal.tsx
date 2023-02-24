import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal";

interface LoaderModalProps {
  open: boolean;
}

const LoaderModal: React.FC<LoaderModalProps> = (props) => (
  <Modal open={props.open}>
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: "35%",
      }}
    >
      <CircularProgress size="30%" />
    </Box>
  </Modal>
);

export default LoaderModal;
