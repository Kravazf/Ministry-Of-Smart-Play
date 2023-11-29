import * as React from 'react';
import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { LoginButton, StyledMenuIcon, StyledToolbar } from './styled';
import AnimateLogo from '../UI/AnimateLogo/AnimateLogo';
import NavListSideBar from '../NavListSideBar/NavListSideBar';

export default function ProminentAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = useCallback(() => {
    setDrawerOpen(true);
  }, []);
  const handleDrawerClose = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <IconButton
            onClick={handleDrawerOpen}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <StyledMenuIcon />
          </IconButton>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              flexGrow: 1,
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <AnimateLogo />
          </Link>
          <Link
            to="/login"
          >
            <LoginButton color="inherit">Login</LoginButton>
          </Link>
        </StyledToolbar>
        <NavListSideBar
          open={drawerOpen}
          onOpen={handleDrawerOpen}
          onClose={handleDrawerClose}
         />
      </AppBar>
    </Box>
  );
}
