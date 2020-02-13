import React from 'react';
import { connect } from 'react-redux';
import { Grid, Box } from '@material-ui/core';
import { getToken } from 'Actions/login/actions';
import Spinner from 'Components/Spinner';
import LoginForm from './LoginForm';

function LoginPage(props) {
  return (
    <Box component="section">
      {props.loading && <Spinner />}
      <Grid container>
        <Grid item xs={12}>
          <Box>
            <LoginForm getToken={data => props.getToken(data)} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const mapStateToProps = ({ login }) => {
  return {
    loading: login.loading
  };
};

export default connect(mapStateToProps, { getToken })(LoginPage);
