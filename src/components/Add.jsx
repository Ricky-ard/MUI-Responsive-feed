import { Box, Fab, Modal, styled, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add Post"
        sx={{ position: "absolute" }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(true)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor="white"
          padding={3}
          borderRadius={5}
        >
          <Typography variant="h5" color="grey" textAlign="center ">
            Create Post
          </Typography>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
