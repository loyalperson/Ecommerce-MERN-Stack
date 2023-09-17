import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: '20px', 
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  imageSection: {
    width: '35%',
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    height: '400px',
  },
  infoSection: {
    display: 'flex',
    // alignItems: 'center',
    flexDirection: 'column',
    width: '50%',
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  sizeGroup: {
    marginTop: '3%',
    display: 'flex'
  },
  subSizeGroup: {
    // display: 'flex'
  },
  btnAddToCart: {
    marginTop: '18%'
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
  [theme.breakpoints.down('sm')]: {
    paper: {
      flexDirection: 'column'
    },
    imageSection: {
      width: '100%'
    },
    infoSection: {
      width: '100%'
    }
  }
}));