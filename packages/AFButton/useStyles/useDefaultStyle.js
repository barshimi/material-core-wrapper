import { makeStyles } from '@material-ui/core/styles';

const useDefaultStyle = props => makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    padding: '5px 20px 5px 20px',
    minWidth: '90px',
    borderRadius: '5px',
    '& span': {
      fontSize: '14px',
      textTransform: "capitalize",
    }
  },
}))();

export default useDefaultStyle;