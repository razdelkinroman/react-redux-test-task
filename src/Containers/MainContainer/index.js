import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import CardsContainer from 'Containers/CardsContainer';
import Button from 'Components/Buttons';
import { editOrder, cleanEditForm, getOrders } from 'Actions/orders/actions';
import { getUserProfile } from 'Actions/login/actions';
import FormContainer from 'Containers/FormContainer';
import Spinner from 'Components/Spinner';

const MainContainer = props => {
  const [totalPrice, setTotalPrice] = useState('');
  const [open, setOpen] = useState(false);

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

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    props.cleanEditForm();
  };

  const editOrderHandler = order => {
    setOpen(true);
    props.editOrder(order);
  };

  return (
    <Box>
      {props.loading && <Spinner />}
      <Button onClick={openModal}>Добавить</Button>
      <CardsContainer editOrder={editOrderHandler} />
      <FormContainer open={open} closeModal={closeModal} />
      {props.orders && props.orders.length > 0 && (
        <Typography variant="h5">Общая стоимость заказа составляет {totalPrice} Руб</Typography>
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