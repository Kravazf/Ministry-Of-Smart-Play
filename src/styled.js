import { Grid, Typography, styled } from '@mui/material';

export const MainWrapp = styled(Grid)(() => ({
  width: '100vw',
}));

export const LogoText = styled(Typography)(({ theme }) => ({
  color: '#04AA6D',
  fontSize: theme.typography.h3.fontSize,
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.h3.fontSize,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.h3.fontSize,
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: theme.typography.h4.fontSize,
  },
}));

export const Item = styled('div')(() => ({
  padding: 0,
  textAlign: 'center',
  overflow: 'auto',
}));

export const HeaderGrid = styled(Grid)(() => ({
  backgroundColor: 'fff',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid rgba(4, 170, 109, 0.2)',
  borderRadius: '5px',
}));

export const SideBarGrid = styled(Grid)(() => ({
  backgroundColor: '#E7E9EB',
  border: '1px solid rgba(4, 170, 109, 0.2)',
}));

export const MainGrid = styled(Grid)(() => ({
  padding: '15px 30px 15px 15px ',
  border: '1px solid rgba(4, 170, 109, 0.2)',
  minHeight: '50vh',
}));

export const FooterGrid = styled(Grid)(() => ({
  backgroundColor: '#fff',
  border: '1px solid rgba(4, 170, 109, 0.2)',
}));
