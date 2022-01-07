import React from 'react';
import SearchBar from '../search-bar/search-bar.component';

import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton, Hidden} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { withRouter, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {  
    flexGrow: 1,
    textAlign: 'left',
    color: '#fff', 
    textDecoration: 'none',
  },
}));

const Navbar = ({ history, prefersDarkMode, setTheme }) => {
  const classes = useStyles();
  const bg = prefersDarkMode
  ?'linear-gradient(to right, #303030 0%, #303030 100%)'
  :'linear-gradient(to right, #3f6cfe 0%, #00f2fe 100%)';

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundImage: bg }}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <Link className={classes.title} to='/'>Dictionary</Link>
          </Typography>
          <Hidden smDown><SearchBar edge="end" /></Hidden>
          <IconButton edge="end" onClick={() => {setTheme(!prefersDarkMode)}} >
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Navbar);
