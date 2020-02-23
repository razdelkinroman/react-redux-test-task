import React, { useEffect } from 'react';
import { Box, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { DeleteIconButton, SaveIconButton } from 'Components/Buttons';

// Компонент не используется. Первоначально пытался реализовать без формика

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    border: '1px solid gray',
    borderRadius: 10,
    padding: 10,
    margin: 10
  }
});

const initialState = {
  title: '',
  distance: '',
  type: 'international',
  price: ''
};

const Form = props => {
  const classes = useStyles();
  const formValues = props.order || initialState;
  const [values, setValues] = React.useState(formValues);
  const { title, distance, type, price, id } = values;
  const [cardDisabled, setCardDisabled] = React.useState(false);

  useEffect(() => {
    const typeDelivery = type === 'internal' ? 3 : 5;
    const price = distance * typeDelivery;
    setValues({ ...values, price });
  }, [distance, type]);

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <Box component="section" className={classes.container}>
      <TextField
        label="Название"
        name="title"
        value={title}
        onChange={e => handleChange(e)}
        disabled={cardDisabled}
      />
      <TextField
        label="Расстояние"
        name="distance"
        value={distance}
        onChange={e => handleChange(e)}
        disabled={cardDisabled}
      />

      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="type" value={type} onChange={e => handleChange(e)}>
          <FormControlLabel
            value="international"
            control={<Radio />}
            label="Международная"
            disabled={cardDisabled}
          />
          <FormControlLabel
            value="internal"
            control={<Radio />}
            label="Внутреннняя"
            disabled={cardDisabled}
          />
        </RadioGroup>
      </FormControl>
      <Typography variant="h6"> Стоимость доставки: {values.price || 0} Руб</Typography>
      <SaveIconButton
        onClick={() => {
          props.saveOrder(values);
        }}
      />
      <DeleteIconButton onClick={() => props.deleteOrder(id)} />
    </Box>
  );
};

export default Form;
