import React, { useEffect, useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { Box, Typography } from '@material-ui/core';

import CardsContainer from 'Containers/CardsContainer';
import { PrimaryButton } from 'Components/Buttons';
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
  const getTotalPrice = items =>
    items &&
    items.reduce((sum, item) => {
      return sum + Number(item.price);
    }, 0);

  const memoizedTotalPrice = useMemo(() => getTotalPrice(props.orders), [props.orders]);

  useEffect(() => {
    props.getOrders();
    props.getUserProfile();
  }, []);

  useEffect(() => {
    setTotalPrice(memoizedTotalPrice);
  }, [memoizedTotalPrice]);

  const openModal = () => {
    setOpen(true);
    props.cleanEditForm();
  };

  const closeModal = () => setOpen(false);

  const editOrderHandler = order => {
    setOpen(true);
    props.editOrder(order);
  };

  return (
    <Box component="main">
      {props.loading && <Spinner />}
      <PrimaryButton name="Добавить" onClick={openModal} />
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
