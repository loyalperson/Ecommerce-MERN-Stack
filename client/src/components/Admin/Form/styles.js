import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: '0%'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  selectDiv: {
    padding: theme.spacing(1),
    display: 'flex',
    flexGrow: 2,
    justifyContent: 'space-between',
  },
  checkBoxControl: {
    width: '100%', 
    display: 'flex', 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    marginTop: '10px'
  }
}));