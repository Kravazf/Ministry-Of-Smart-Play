import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const SearchBar = styled('div')`
  display: flex,
`;

export const StyledTextField = styled(TextField)`
  .MuiInputLabel-root {
    color: rgba(255, 255, 255, 0.5);
    font-size: 19px;
    filter: drop-shadow(0 0 25px #00dc82);
    transition: color 0.3s, filter 0.3s;

    &.Mui-focused {
      color: #00dc82;
      filter: drop-shadow(0 0 25px #00dc82);
    }
  }

  .MuiOutlinedInput-root {
    fieldset {
      border-color: rgba(255, 255, 255, 0.5);
    }

    &:hover fieldset {
      border-color: #00dc82;
    }

    &.Mui-focused fieldset {
      border-color: #00dc82;
    }

    input {
      color: #00dc82;
      filter: drop-shadow(0 0 25px #00dc82);
    }
  }
`;
