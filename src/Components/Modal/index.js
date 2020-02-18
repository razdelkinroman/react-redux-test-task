import React from 'react';
import { Dialog, IconButton, Typography, Paper } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogContent from '@material-ui/core/DialogContent/DialogContent';
import { makeStyles } from '@material-ui/styles';
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const useStyles = makeStyles({
  window: {
    background: 'darkgray'
  },
  closeIcon: {
    position: 'absolute',
    top: '10px',
    right: '10px'
  },
  title: {
    marginBottom: '4%'
  }
});

const ModalWindow = ({ title, open, close, children }) => {
  const cls = useStyles();
  return (
    <Dialog
      fullWidth
      maxWidth={'sm'}
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperComponent={PaperComponent}
      transitionDuration={750}
    >
      <MuiDialogTitle disableTypography>
        <Typography className={cls.title} variant="h6">
          {title}
        </Typography>
        <IconButton aria-label="close" onClick={close} className={cls.closeIcon}>
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
      <MuiDialogContent style={{ paddingBottom: '25px' }}>{children}</MuiDialogContent>
    </Dialog>
  );
};

export default ModalWindow;
