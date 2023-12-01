import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Divider,
  Hidden,
  List,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import NavBar from '../NavBar/NavBar';
import {
  NavList,
  NavListWrapp,
  StyledChevronLeftIcon,
  StyledContainer,
  StyledDrawer,
  StyledListItem,
} from './styled';

const navigationLinks = [
  {
    id: 'Home',
    name: 'Home',
    href: '/',
  },
  {
    id: 'Add quiz',
    name: 'Add quiz',
    href: '/create',
  },
  {
    id: 'Favorite',
    name: 'Favorite',
    href: '/favorite',
  },
  {
    id: 'LinkedInIcon',
    name: <LinkedInIcon fontSize='large' />,
    href: 'https://www.linkedin.com/in/kravazf',
  },
  {
    id: 'GitHubIcon',
    name: <GitHubIcon fontSize='large' />,
    href: 'https://github.com/Kravazf?tab=repositories',
  },
  {
    id: 'InstagramIcon',
    name: <InstagramIcon fontSize='large' />,
    href: 'https://www.instagram.com/maxkrav4enko/',
  },
];

export default function NavListSideBar({ open, onClose }) {
  return (
    <NavListWrapp>
      <StyledDrawer
      anchor='left'
      open={open}
      onClose={onClose}
      id='vanta'
      >
      <StyledChevronLeftIcon onClick={onClose}/>
        <Divider />
        <List>
          {navigationLinks.map((item) => (
            <StyledListItem key={item.id}>
              <Link
                to={item.href}
                variant='button'
                className='draw-link'
              >
                {item.name}
              </Link>
            </StyledListItem>
          ))}
        </List>
      </StyledDrawer>
      <StyledContainer>
        <Hidden implementation="css" mdDown>
            <NavList>
              {navigationLinks.map((item) => (
                  <Link
                    key={item.id}
                    to={item.href}
                    variant='button'
                    className='nav-link'
                  >
                    {item.name}
                  </Link>
              ))}

            </NavList>
        </Hidden>
        <NavBar />
      </StyledContainer>
    </NavListWrapp>
  );
}
