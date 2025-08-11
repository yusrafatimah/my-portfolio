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
      sx={{ width: '100%', p: '2%' }}
    >
      <Box
        className={'modal-content'}
        sx={{
          maxWidth: '1300px',
          width: '100%',
          height: '100%',
          maxHeight: 700,
        }}
      >
        <Box
          className={'modal-inner-wrapper'}
          sx={{ height: '100%', width: '100%' }}
        >
          {children}
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
