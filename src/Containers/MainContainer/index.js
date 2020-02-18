import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Box, Typography } from '@material-ui/core';

import CardsContainer from 'Containers/CardsContainer';
import Button from 'Components/Buttons';
import FormContainer from 'Containers/FormContainer';
import Spinner from 'Components/Spinner';
import Profile from 'Components/Profile';

import { editOrder, cleanEditForm, getOrders } from 'Actions/orders/actions';
import { getUserProfile } from 'Actions/login/actions';

import './styles.css';

const MainContainer = props => {
  const [totalPrice, setTotalPrice] = useState('');
  const [open, setOpen] = useState(false);
  const ordersNotEmpty = props.orders && props.orders.length > 0;

  useEffect(() => {
    props.getOrders();
    props.getUserProfile();
  }, []);

  useEffect(() => {
    const total =
      props.orders &&
      props.orders.reduce((sum, item) => {
        return sum + Number(item.price);
      }, 0);
    setTotalPrice(total);
  }, [props.orders]);

  const openModal = () => setOpen(true);

  const closeModal = () => {
    setOpen(false);
    props.cleanEditForm();
  };

  const editOrderHandler = order => {
    setOpen(true);
    props.editOrder(order);
  };

  return (
    <Box component="main">
      {props.loading && <Spinner />}
      <Button onClick={openModal}>Добавить</Button>
      <Profile />
      <CardsContainer editOrder={editOrderHandler} />
      <FormContainer open={open} closeModal={closeModal} />
      {ordersNotEmpty && (
        <Typography color="error" variant="h5">
          Общая стоимость заказа составляет {totalPrice} Руб
        </Typography>
      )}
    </Box>
  );
};

const mapStateToProps = ({ orders }) => {
  return {
    orders: orders.items,
    editableOrder: orders.editableOrder,
    loading: orders.loading
  };
};

export default connect(mapStateToProps, { editOrder, cleanEditForm, getOrders, getUserProfile })(
  MainContainer
);
