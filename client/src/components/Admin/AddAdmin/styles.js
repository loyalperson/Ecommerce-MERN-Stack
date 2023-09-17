import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: '12%',
    width: '100%'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  [theme.breakpoints.down('sm')]: {
    paper: {
      padding: theme.spacing(2),
      marginTop: '3%',
      width: '95%'
    }
  }
}));