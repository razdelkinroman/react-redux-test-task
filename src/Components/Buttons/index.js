import React, { useState } from 'react';
import { Button, IconButton, Tooltip, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DeleteModalWindow from 'Components/Modal/DeleteModalWindow';

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

export const PrimaryButton = props => {
  const { name, ...otherProps } = props;
  const classes = styles();

  return (
    <Button variant="contained" className={classes.primary} {...otherProps}>
      {name}
    </Button>
  );
};

export const PrimaryIconButton = props => {
  const { tooltip, size, name, color = 'secondary', ...otherProps } = props;

  return (
    <Tooltip title={tooltip}>
      <IconButton color={color} {...otherProps}>
        <Icon fontSize={size}>{name}</Icon>
      </IconButton>
    </Tooltip>
  );
};

export const DeleteButton = function({ deleteAction }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <PrimaryIconButton name="delete" tooltip="Удалить" onClick={() => setShowDeleteModal(true)} />
      <DeleteModalWindow
        open={showDeleteModal}
        close={() => setShowDeleteModal(false)}
        handleDelete={deleteAction}
      />
    </>
  );
};
