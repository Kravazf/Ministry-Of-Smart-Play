/* eslint-disable promise/always-return */
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import MagnetButton from '../../components/UI/MagnetButton/MagnetButton';
import InputText from '../../components/Forms/InputText';
import { testRules } from '../../constans';
import { LoginPageFormWrap, StyledRegisterLink } from './styled';

const LoginForm = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();

  const onSubmit = () => {
    navigate('/MinistryOfSmartPlay');
  };

  return (
    <LoginPageFormWrap>
      <Typography variant="h3">
        Welcom
      </Typography>
      <InputText
        fullWidth
        control={control}
        name='email'
        rules={testRules.email}
        label='Email'
      />
      <InputText
        fullWidth
        control={control}
        name='password'
        rules={testRules.password}
        label='Password'
      />
      <MagnetButton
         onClick={handleSubmit(onSubmit)}>
        LOGIN
      </MagnetButton>
      <StyledRegisterLink to="/register">
        REGISTER
      </StyledRegisterLink>
    </LoginPageFormWrap>
  );
};

export default LoginForm;
