import React from 'react';
import PropTypes from 'prop-types';
import { objParser } from '../../utils';
import { Button } from '@material-ui/core';
import * as styles from './useStyles';
import { IconGen } from './components';

const AFButton = props => {
  const cssObj = (styles[props.useStyle] && styles[props.useStyle](props)) || styles['useDefaultStyle'](props);
  const ariaLabel = props.ariaLabel && props.ariaLabel.length
    ? props.ariaLabel
    : typeof props.text === 'string' ? props.text : ''

  return props.text ? (
    <Button
      {...objParser(['useStyle', 'makeStyle'], props)}
      aria-label={ariaLabel}
      className={cssObj.root}
      startIcon={props.startIcon && <IconGen {...props.startIcon} />}
      endIcon={props.endIcon && <IconGen {...props.endIcon} />}
    >
      {props.text}
    </Button>
  ) : null
}

AFButton.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  disabled: PropTypes.bool,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  startIcon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.shape({
      iconType: PropTypes.string,
      iconSize: PropTypes.number,
      iconClass: PropTypes.object
    })
  ]),
  endIcon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.shape({
      iconType: PropTypes.string,
      iconSize: PropTypes.number,
      iconClass: PropTypes.object
    })
  ]),
  classes: PropTypes.object,
  useStyle: PropTypes.string,
  makeStyle: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onMouseOver: PropTypes.func,
  ariaLabel: (props, propName, componentName) => {
    if (typeof props.text !== 'string' || (!props.text.length && (!props.ariaLabel || !props.ariaLabel.length))) {
      return new Error(`If props 'text' is not a string 'ariaLabel' must be defined in '${componentName}'.`);
    }
  }
}


AFButton.defaultProps = {
  useStyle: 'useDefaultStyle',
  color: 'primary',
  variant: 'contained',
  size: 'medium'
}

export default AFButton;
