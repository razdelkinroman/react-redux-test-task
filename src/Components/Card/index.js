import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Box, Divider } from '@material-ui/core';

import { PrimaryIconButton, DeleteButton } from 'Components/Buttons';

import { typeDelivery } from './const';
import { styles } from './styles';

const OrderCard = ({ order, deleteOrder, editOrder }) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { title, distance, type, price } = order;

  const editOrderHandler = useCallback(() => editOrder(order), [order, editOrder]);

  return (
    <Card className={classes.card}>
      <CardContent className={classes.card__body}>
        <Typography className={classes.card__title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography gutterBottom>Дальность доставки: {distance}км</Typography>
        <Typography gutterBottom>Тип доставки: {typeDelivery[type]}</Typography>
        <Typography variant="h6" className={classes.card__price}>
          {price} Руб
        </Typography>
      </CardContent>
      <Box className={classes.card_footer}>
        <Divider />
        <Box className={classes.card__actions}>
          <PrimaryIconButton name="edit" tooltip="Редактировать" onClick={editOrderHandler} />
          <DeleteButton deleteAction={() => deleteOrder(order._id)} />
        </Box>
      </Box>
    </Card>
  );
};

export default OrderCard;
