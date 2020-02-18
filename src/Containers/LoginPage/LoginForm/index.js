import React from 'react';
import { Formik, Form } from 'formik';
import { Avatar, Container, LinearProgress, Typography, Paper } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import PrimaryButton from 'Components/Buttons';
import { OutlineTextField } from 'Components/Fields';

import schema from './schema';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#b93944'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  }
}));

const initialValues = { email: 'eve.holt@reqres.in', password: 'cityslicka' };

function LoginForm({ getToken }) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            getToken(values);
            setSubmitting(false);
          }}
          validationSchema={schema}
          render={({ handleSubmit, isSubmitting }) => (
            <Form className={classes.form} onSubmit={handleSubmit}>
              <OutlineTextField name="email" type="email" label="Email" fullWidth />
              <OutlineTextField type="password" label="Пароль" name="password" fullWidth />
              {isSubmitting && <LinearProgress />}
              <PrimaryButton type="submit" fullWidth disabled={isSubmitting}>
                Войти
              </PrimaryButton>
            </Form>
          )}
        />
      </Paper>
    </Container>
  );
}

export default LoginForm;
