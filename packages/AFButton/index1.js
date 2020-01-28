import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const AFButton = props => {
  return props.text ? (
    <Button {...props}>
      {props.text}
    </Button>
  ) : null
}

AFButton.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
}


AFButton.defaultProps = {
  color: 'primary',
  text: 'hello',
  variant: 'contained',
  size: 'medium'
}

export default AFButton;