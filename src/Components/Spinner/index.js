import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  spinner: {
    width: '100%',

    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    zIndex: 500,
    alignItems: 'center',
    flexDirection: 'column'
  }
};

export default function Spinner() {
  return (
    <div style={styles.spinner}>
      <CircularProgress />
    </div>
  );
}
