import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Box, Divider } from '@material-ui/core';

import { PrimaryIconButton, DeleteButton } from 'Components/Buttons';

import { typeDelivery } from './const';
import { styles } from './styles';

const OrderCard = ({ order, deleteOrder, editOrder }) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { title, distance, type, price } = order;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.body}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography gutterBottom>Дальность доставки: {distance}км</Typography>
        <Typography gutterBottom>Тип доставки: {typeDelivery[type]}</Typography>
        <Typography variant="h5" className={classes.price}>
          Цена {price} Руб
        </Typography>
      </CardContent>
      <Box className={classes.footer}>
        <Divider />
        <Box className={classes.action}>
          <PrimaryIconButton name="edit" tooltip="Редактировать" onClick={() => editOrder(order)} />
          <DeleteButton deleteAction={() => deleteOrder(order._id)} />
        </Box>
      </Box>
    </Card>
  );
};

export default OrderCard;
