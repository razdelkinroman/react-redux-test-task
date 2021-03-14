import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';

import pick from 'lodash/pick';

import CardsContainer from 'Containers/CardsContainer';

import { Pagination } from 'Components/Pagination';
import FormContainer from 'Containers/FormContainer';
import Spinner from 'Components/Spinner';
import Profile from 'Components/Profile';

import { openEditForm, cleanEditForm, getAllOrders } from 'Actions/orders/actions';
import { getUserProfile } from 'Actions/login/actions';

import './styles.css';

const MainContainer = props => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    props.getUserProfile();
  }, []);

  const openModal = useCallback(() => {
    setOpen(true);
    props.cleanEditForm();
  }, []);

  const closeModal = useCallback(() => setOpen(false), []);

  const editOrderHandler = useCallback(order => {
    setOpen(true);
    props.openEditForm(order);
  }, []);

  const onPageChangeHandler = useCallback(page => {
    props.getAllOrders(page.selected + 1);
  }, []);

  return (
    <Box component="main" className="main">
      {props.loading && <Spinner />}
      <Profile />
      <CardsContainer editOrder={editOrderHandler} openModal={openModal} />
      <FormContainer open={open} closeModal={closeModal} />
      <Pagination onPageChange={onPageChangeHandler} totalPages={props.totalPages} />
    </Box>
  );
};

const mapStateToProps = ({ orders }) => {
  return pick(orders, ['items', 'totalPages', 'currentPage', 'editableOrder', 'loading']);
};

export default connect(mapStateToProps, {
  openEditForm,
  cleanEditForm,
  getUserProfile,
  getAllOrders
})(MainContainer);
