import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
  root: {
    width: 550,
    margin: 'auto'
  }
});

export default function ErrorAlert({ message }) {
  const classes = useStyles();

  return (
    message && (
      <div className={classes.root}>
        <Alert variant="filled" severity="error">
          {message}
        </Alert>
      </div>
    )
  );
}
