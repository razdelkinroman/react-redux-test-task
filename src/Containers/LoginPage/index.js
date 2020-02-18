import React from 'react';
import { connect } from 'react-redux';
import { Grid, Box } from '@material-ui/core';

import Spinner from 'Components/Spinner';
import LoginForm from './LoginForm';

import { getToken } from 'Actions/login/actions';

const LoginPage = props => {
  return (
    <Box component="section">
      {props.loading && <Spinner />}
      <Grid container>
        <Grid item xs={12}>
          <LoginForm getToken={props.getToken} />
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = ({ login }) => {
  return {
    loading: login.loading
  };
};

export default connect(mapStateToProps, { getToken })(LoginPage);
