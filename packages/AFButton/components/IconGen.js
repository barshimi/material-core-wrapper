import React from 'react';
import { Icon } from '@material-ui/core';

export default function IconGen ({ iconType = 'far fa-plus-square', iconSize = 16, iconClass , ...IconProps }) {
  return (
    <Icon className={iconType} style={Object.assign({}, { fontSize: iconSize }, iconClass)} {...IconProps} />
  )
}