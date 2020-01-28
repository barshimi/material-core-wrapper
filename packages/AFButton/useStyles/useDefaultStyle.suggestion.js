import { makeStyles } from '@material-ui/core/styles';

const useDefaultStyle = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    padding: '5px 20px 5px 20px',
    // to use props based styling you can do:
    // styleName: props => ({ color: props.color })
    minWidth: '90px',
    borderRadius: '5px',
    '& span': {
      fontSize: '14px',
      textTransform: "capitalize",
    }
  },
}))();

export default useDefaultStyle;

useDefaultStyle({ disabled })
