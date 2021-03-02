import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import ReactPaginate from 'react-paginate';

import CardsContainer from 'Containers/CardsContainer';
import { PrimaryButton } from 'Components/Buttons';
import FormContainer from 'Containers/FormContainer';
import Spinner from 'Components/Spinner';
import Profile from 'Components/Profile';

import { openEditForm, cleanEditForm, getAllOrders } from 'Actions/orders/actions';
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
    props.getUserProfile();
  }, []);

  useEffect(() => {
    setTotalPrice(memoizedTotalPrice);
  }, [memoizedTotalPrice]);

  const openModal = useCallback(() => {
    setOpen(true);
    props.cleanEditForm();
  }, []);

  const closeModal = useCallback(() => setOpen(false), []);

  const editOrderHandler = useCallback(
    order => {
      setOpen(true);
      props.openEditForm(order);
    },
    [props]
  );

  const onPageChange = page => {
    props.getAllOrders(page.selected + 1);
  };

  return (
    <Box component="main">
      {props.loading && <Spinner />}
      <PrimaryButton name="Добавить" onClick={openModal} />
      {ordersNotEmpty && (
        <Typography className="total-amount" color="error" variant="h5">
          Общая стоимость заказа составляет {totalPrice} Руб
        </Typography>
      )}
      <Profile />
      <CardsContainer editOrder={editOrderHandler} />
      <FormContainer open={open} closeModal={closeModal} />
      <ReactPaginate
        nextLabel="&rarr;"
        previousLabel="&larr;"
        pageCount={props.totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        activeLinkClassName={'active'}
      />
    </Box>
  );
};

const mapStateToProps = ({ orders }) => {
  return {
    orders: orders.items,
    totalPages: orders.totalPages,
    currentPage: orders.currentPage,
    editableOrder: orders.editableOrder,
    loading: orders.loading
  };
};

export default connect(mapStateToProps, {
  openEditForm,
  cleanEditForm,
  getUserProfile,
  getAllOrders
})(MainContainer);
