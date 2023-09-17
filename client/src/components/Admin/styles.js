import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: '5%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  mainDiv: {
    display: 'block',
    justifyContent: 'center',
  },
  linkText: {
    textDecoration: 'none',
    color: 'blue'
  },
  [theme.breakpoints.down('sm')]: {
    paper: {
      padding: theme.spacing(2),
      marginTop: '30%',
      width: '95%'
    }
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));