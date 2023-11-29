import styled from 'styled-components';

export const HeaderContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '15px 0',
}));

export const QuizImage = styled('img')(() => ({
  width: '100px',
  height: '100px',
  objectFit: 'contain',
}));
