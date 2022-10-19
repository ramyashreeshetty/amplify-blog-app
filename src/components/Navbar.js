import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, Grid } from '@material-ui/core';
import '../App.css';

const font = "'Poppins', sans-serif";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navbar: {
    backgroundColor: '#ed7311',
  },
  appTitle: {
    textDecoration: "none",
    color: "white",
    fontFamily: font,
  },
  navBtn: {
    fontFamily: font,
    textDecoration: "none",
    color: "white",
  }
}));

export default function NavBar () {

  const classes = useStyles();

  return (
  <div className={classes.root}>
    <AppBar position="static" className={classes.navbar}>
      <Toolbar variant="dense" sx={{ flexGrow: 1 }}>
        <IconButton edge="start" 
          className={classes.menuButton} 
          color="inherit" aria-label="menu">
            <MenuIcon />
        </IconButton>
          <Typography variant="h6" color="inherit"  style={{ flex: 1 }}>
            <Link to='/' className={classes.appTitle}>
              Amplify Blog Application
            </Link>
          </Typography>
          <Link to='/new' className={classes.navBtn}>
            <Button color="inherit" align="right" className={classes.navBtn}>Create post</Button>
          </Link>
          <Button color="inherit" className={classes.navBtn} align="right">Github</Button>
      </Toolbar>
    </AppBar>
  </div>

  );
}
