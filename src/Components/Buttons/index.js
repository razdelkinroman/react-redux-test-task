import React, { memo } from 'react';
import { Button, IconButton, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const styles = makeStyles({
  primary: {
    marginRight: 10,
    margin: '10px 0',
    backgroundColor: '#3e4147',
    color: 'white',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#585b63'
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
    <Tooltip title="Удалить">
      <IconButton {...props} color="secondary">
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export const EditIconButton = props => {
  return (
    <Tooltip title="Редактировать">
      <IconButton {...props} color="secondary">
        <EditIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default memo(PrimaryButton);
