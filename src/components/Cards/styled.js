import styled from 'styled-components';

export const StyledCard = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '550px',
  border: '1px solid rgba(4, 170, 109)',
  borderRadius: '0 0 10px 10px',
  position: 'relative',
  overflow: 'hidden',
}));

export const StyledCardMedia = styled('img')(() => ({
  height: '200px',
  backgroundSize: 'cover',
}));

export const CardAction = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  paddingBottom: '7px',
}));
