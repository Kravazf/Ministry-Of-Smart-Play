import { Button, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';

export const StyledToolbar = styled(Toolbar)(() => ({
  alignItems: 'flex-start',
  paddingTop: '10px',
  paddingBottom: '10px',
  backgroundColor: 'rgb(37, 40, 57)',
}));

export const ResponsiveTypography = styled('div')(() => ({
  flexGrow: 1,
  color: '#00dc82',
  filter: 'dropShadow(0 0 25px #00dc82)',
  transition: 'color 0.3s, filter 0.3s',
  alignSelf: 'flex-end',
  '@media (max-width:600px)': {
    fontSize: '1.5rem',
  },
  '@media (min-width:600px)': {
    fontSize: '2.5rem',
  },
  '@media (min-width:900px)': {
    fontSize: '3.5rem',
  },
}));

export const LoginButton = styled(Button)(() => ({
  '&:hover': {
    color: '#00dc82',
    filter: 'drop-shadow(0 0 25px #00dc82)',
  },
}));

export const StyledMenuIcon = styled(MenuIcon)(() => ({
  '&:hover': {
    color: '#00dc82',
    filter: 'drop-shadow(0 0 25px #00dc82)',
  },
}));
