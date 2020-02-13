import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { FormControl, MenuItem } from '@material-ui/core';

export function OutlineTextField(props) {
  return (
    <Field
      {...props}
      component={TextField}
      variant="outlined"
      margin="dense"
      InputLabelProps={{ shrink: true }}
    />
  );
}

export const OutlineSelect = ({ label, name, value, selectItems = [], className, ...props }) => (
  <FormControl className={className}>
    <Field
      {...props}
      label={label}
      select
      variant="outlined"
      margin="dense"
      name={name}
      value={value}
      component={TextField}
      InputLabelProps={{
        shrink: true
      }}
    >
      {selectItems &&
        selectItems.map(item => (
          <MenuItem key={item.value} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
    </Field>
  </FormControl>
);
