import { makeStyles } from '@material-ui/core';

export const useLabelStyles = makeStyles(theme => ({
  root: {
    textAlign: 'left',
    fontSize: theme.typography.caption
  }
}));

export const useInputStyles = makeStyles(({
  root: {
    borderRadius: '10px',
    border: '1px solid #000',
    padding: '5px 10px' // TODO: get from theme according to style guide
  },
  error: {
    borderColor: 'red'
  }
}));
