import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';

export const FavoriteContainer = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '15px',
  padding: '15px 0',
}));

export const FavoriteGrid = styled(Grid)(() => ({
  alignItems: 'center',
  justifyContent: 'center',
}));

export const FavoriteTypography = styled(Typography)(() => ({
  '&&': {
    marginTop: '200px',
  },
}));
