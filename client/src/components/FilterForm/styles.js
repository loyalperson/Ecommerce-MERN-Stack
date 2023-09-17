import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },
      paper: {
        padding: theme.spacing(0),
        marginTop: '0%',
        marginBottom: '3%',
        width: '31%',
      },
      form: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      formControl: {
        width: '95%'
      },
      buttonSubmit: {
        marginBottom: 10,
      },
      selectSubDiv: {
        display: 'flex',
        flexGrow: 3,
        justifyContent: 'space-between',
      },
      selectDiv: {
        padding: theme.spacing(1),
        display: 'flex',
        flexGrow: 3,
        justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
      paper: {
        width: '100%'
      },
      selectDiv: {
        padding: theme.spacing(0),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      },
      selectSubDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around'
      },
      formControl: {
        width: '80%'
      },
    }
}));