import React from 'react';
import { Icon as MaterialIcon } from '@material-ui/core';

function Icon ({ iconType = 'far fa-plus-square', iconSize = 16, className , ...rest }) {
  return (
    <MaterialIcon className={`${className} ${iconType}`}
                  style={{ fontSize: iconSize }}
                  {...rest} />
  )
}

export default Icon;
