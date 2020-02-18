import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Box, Divider } from '@material-ui/core';
import { DeleteIconButton, EditIconButton } from 'Components/Buttons';

const useStyles = makeStyles({
  card: {
    width: 300,
    height: 200,
    position: 'relative',
    margin: '15px 15px 0 0',
    background: 'linear-gradient(180deg, #3e4247 0%, #353535f7 74%)',
    color: 'white',
    borderRadius: 20
  },
  title: {
    fontWeight: 500,
    color: 'coral',
    lineHeight: 1.33,
    overflow: 'hidden',
    display: '-webkit-box',
    maxHeight: 32,
    marginBottom: 8,
    paddingRight: 24,
    textTransform: 'uppercase',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical'
  },
  body: {
    color: '#d2d5da'
  },
  footer: {
    position: 'absolute',
    bottom: 5,
    width: '100%'
  },
  action: {
    display: 'flex',
    justifyContent: 'center'
  },
  price: {
    textAlign: 'end',
    margin: '10px 0'
  }
});

const typeDelivery = {
  internal: 'Внутренняя',
  international: 'Международная'
};

const OrderCard = ({ order, deleteOrder, editOrder }) => {
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
          <EditIconButton onClick={() => editOrder(order)} />
          <DeleteIconButton onClick={() => deleteOrder(order.id)} />
        </Box>
      </Box>
    </Card>
  );
};

export default OrderCard;
