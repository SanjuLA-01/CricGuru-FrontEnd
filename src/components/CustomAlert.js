import React from 'react';

import { Collapse, Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const CustomAlert = ({ message, type }) => {
  const [open, setOpen] = React.useState(true);

  return (
    <Collapse in={open}>
      <Alert
        severity={type}
        action={
          <IconButton
            aria-label='close'
            color='inherit'
            size='small'
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize='inherit' />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {message}
      </Alert>
    </Collapse>
  );
};
