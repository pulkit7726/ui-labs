import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

export default function ListName ( props: any) {
    return (
        <>
        <Router>
        <Link style={{textDecoration: 'none', color: '#000000DE'}}  to="/"> 
        <List>
            <ListItem key="home" disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: props.open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: props.open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" sx={{ opacity: props.open ? 1 : 0 }} />
              </ListItemButton>
              </ListItem>
        </List>
        </Link>
        <Link style={{textDecoration: 'none', color: '#000000DE'}} to="/dashboard"> 
        <List>
            <ListItem key="dashboard" disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: props.open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: props.open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ opacity: props.open ? 1 : 0 }} />
              </ListItemButton>
              </ListItem>
        </List>
        </Link>
        <Link style={{textDecoration: 'none', color: '#000000DE'}} to="/users"> 
        <List>
            <ListItem key="users" disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: props.open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: props.open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <PeopleAltIcon />
                </ListItemIcon>
                <ListItemText primary="Users" sx={{ opacity: props.open ? 1 : 0 }} />
              </ListItemButton>
              </ListItem>
        </List>
        </Link>
        </Router>
      </>
    );
}