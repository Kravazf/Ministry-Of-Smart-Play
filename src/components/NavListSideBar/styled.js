import { Drawer, ListItem } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import styled from 'styled-components';

export const NavListWrapp = styled('div')(() => ({
  display: 'flex',
  backgroundColor: '#252839',
  justifyContent: 'center',
}));

export const StyledContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginBottom: '10px',
  width: '100%',
}));

export const NavList = styled('div')`
  display: flex;
  flex-grow: 1;
  align-items: center;

  .nav-link {
    color: white;
    margin-right: 40px;
    flex-grow: 1;
    text-align: center;
    font-size: 25px;
    color: rgba(255, 255, 255, 0.5);
    filter: drop-shadow(0 0 25px #00dc82);
    transition: color 0.3s, filter 0.3s;
    text-decoration: underline #00dc82;
    text-decorationColor: #00dc82;
  }

  .nav-link:hover {
    color: #00dc82;
    filter: drop-shadow(0 0 25px #00dc82);
  }
`;

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 30vw;
    align-items: center;
    position: relative;
    padding-top: 40px;
    background-color: rgb(37, 40, 57);
  }
`;

export const StyledChevronLeftIcon = styled(ChevronLeftIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  filter: drop-shadow(0 0 25px #00dc82);
  transition: color 0.3s, filter 0.3s;
  :hover {
    color: #00dc82;
    filter: drop-shadow(0 0 25px #00dc82);
    width: 40px;

  }
`;

export const StyledListItem = styled(ListItem)`
  .draw-link {
    color: white;
    margin-right: 20px;
    flex-grow: 1;
    text-align: center;
    font-size: 18px;
    filter: drop-shadow(0 0 25px #00dc82);
    transition: color 0.3s, filter 0.3s;
    text-decoration: underline #00dc82;
    text-decorationColor: #00dc82;
  }

  .draw-link:hover {
    color: #00dc82;
    filter: drop-shadow(0 0 25px #00dc82);
  }
`;
