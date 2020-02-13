import React, { memo } from 'react';
import { Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const styles = makeStyles({
  primary: {
    marginRight: 10,
    marginBottom: 20,
    backgroundColor: '#1B9553',
    color: 'white',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#1a864f'
    }
  }
});

const PrimaryButton = props => {
  const classes = styles();
  return (
    <Button variant="contained" className={classes.primary} {...props}>
      {props.children}
    </Button>
  );
};

export const SaveIconButton = props => {
  return (
    <IconButton {...props} color="primary">
      <SaveIcon fontSize="large" />
    </IconButton>
  );
};

export const DeleteIconButton = props => {
  return (
    <IconButton {...props} color="secondary">
      <DeleteIcon fontSize="large" />
    </IconButton>
  );
};

export const EditIconButton = props => {
  return (
    <IconButton {...props}>
      <EditIcon fontSize="small" />
    </IconButton>
  );
};

export default memo(PrimaryButton);
