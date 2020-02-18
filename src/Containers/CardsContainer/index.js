import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Card from 'Components/Card';

import { deleteOrder } from 'Actions/orders/actions';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 20
  }
});

const CardsContainer = props => {
  const classes = useStyles();
  const { orders } = props;

  return (
    <Box className={classes.container}>
      {orders &&
        orders.map(item => (
          <Card
            key={item.title}
            order={item}
            deleteOrder={props.deleteOrder}
            editOrder={props.editOrder}
          />
        ))}
    </Box>
  );
};

const mapStateToProps = ({ orders }) => {
  return {
    orders: orders.items
  };
};

export default connect(mapStateToProps, { deleteOrder })(CardsContainer);
