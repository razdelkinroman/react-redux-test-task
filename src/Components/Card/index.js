import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Tooltip,
  Divider,
  IconButton
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  card: {
    width: 300,
    height: 200,
    position: 'relative',
    margin: '15px 15px 0 0'
  },
  title: {
    fontWeight: 500,
    color: '#0a2896',
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

const OrderCard = ({ order, deleteOrder, editOrder }) => {
  const classes = useStyles();
  const { title, distance, type, price } = order;

  return (
    <Card className={`${classes.card} `}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Дальность доставки: {distance}км
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Тип доставки: {type}
        </Typography>
        <Typography variant="h5" className={classes.price}>
          Цена {price} Руб
        </Typography>
      </CardContent>
      <Box className={classes.footer}>
        <Divider />
        <Box className={classes.action}>
          <Tooltip title="Редактировать" aria-label="Редактировать">
            <IconButton>
              <EditIcon fontSize="small" onClick={() => editOrder(order)} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Удалить" aria-label="Редактировать">
            <IconButton>
              <DeleteIcon fontSize="small" onClick={() => deleteOrder(order.id)} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Card>
  );
};

export default OrderCard;
