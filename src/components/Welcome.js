import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const font = "'Poppins', sans-serif";

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#3196e0',
      fontFamily: font,
      color: "white",
      padding: "2%",
      paddingLeft: "6%"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    
  }));

const Welcome = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h2>Welcome to Amplify Blog Application</h2>
        <p>Lets Play with Amplify!!!</p>
    </div>
  )
}

export default Welcome