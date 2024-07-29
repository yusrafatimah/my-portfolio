import { Box, Modal } from '@mui/material';
import React from 'react';

const CustomModal = ({
  children,
  open,
  width,
  height,
  handleOpen,
  handleClose,
}) => {
  return (
    <Modal
      className="custom-modal"
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={open}
      onClose={handleClose}
    >
      <Box
        className={'modal-content'}
        sx={{ width: 'fit-content', height: 'fit-content' }}
      >
        <Box
          className={'modal-inner-wrapper'}
          sx={{ width: width, height: height }}
        >
          {children}
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
