import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import Card from 'Components/Card';
import { PrimaryButton } from 'Components/Buttons';

import { deleteOrder, getAllOrders } from 'Actions/orders/actions';

import './styles.css';

const CardsContainer = memo(props => {
  const { orders, openModal, editOrder } = props;

  useEffect(() => {
    props.getAllOrders();
  }, []);

  return (
    <Box className="cards">
      <PrimaryButton name="Добавить" onClick={openModal} />
      <Box className="cards__container">
        {orders &&
          orders.map(item => (
            <Card
              key={item.title}
              order={item}
              deleteOrder={props.deleteOrder}
              editOrder={editOrder}
            />
          ))}
      </Box>
    </Box>
  );
});

const mapStateToProps = ({ orders }) => {
  return {
    orders: orders.items
  };
};

export default connect(mapStateToProps, { deleteOrder, getAllOrders })(CardsContainer);
