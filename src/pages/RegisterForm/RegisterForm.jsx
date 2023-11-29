import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import InputText from '../../components/Forms/InputText';
import { testRules } from '../../constans';
import { LoginPageFormWrap } from './styled';
import MagnetButton from '../../components/UI/MagnetButton/MagnetButton';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();

  const onSubmit = () => {
    navigate('/login');
  };

  return (
    <LoginPageFormWrap>
      <Typography variant="h3">
        Welcom sing in
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
        REGISTER
      </MagnetButton>
    </LoginPageFormWrap>
  );
};

export default RegisterForm;
