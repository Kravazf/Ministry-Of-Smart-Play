import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoginPageFormWrap = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',
}));

export const StyledRegisterLink = styled(Link)(() => ({
  margin: '20px',
  color: 'green',
}));
