import React from 'react';
import { FormControl, FormLabel, Input, FormHelperText } from '@material-ui/core'
import * as PropTypes from 'prop-types';

import { useLabelStyles, useInputStyles } from './styles';

function AFTextField ({ id, label, placeholder, description, inputProps = {}, formLabelProps = {}, formHelperTextProps = {} , ...rest }) {
  const labelClasses = useLabelStyles();
  const inputClasses = useInputStyles();

  return (
    <FormControl {...rest}>
      <FormLabel classes={labelClasses} htmlFor={id} component="label" {...formLabelProps}>{label}</FormLabel>
      <Input classes={inputClasses} id={id} disableUnderline={true} placeholder={placeholder} {...inputProps} />
      <FormHelperText id={id} {...formHelperTextProps}>{description}</FormHelperText>
    </FormControl>
  );
}

AFTextField.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  description: PropTypes.string,
  inputProps: PropTypes.object
};

export default AFTextField;
