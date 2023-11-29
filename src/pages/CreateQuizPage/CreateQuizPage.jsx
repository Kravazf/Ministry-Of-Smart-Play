/* eslint-disable no-console */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import InputText from '../../components/Forms/InputText';
import { testRules } from '../../constans';
import { quizCardContent } from '../../api/quiz-card-content/quiz-card-content';
import thunks from '../../store/services/tests/thunks';
import { FormWrap } from './styled';
import GlowButton from '../../components/UI/GlowButton/GlowButton';

const CreateQuizPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { control, handleSubmit, getValues } = useForm();
  const onSubmit = () => {
    console.log(getValues());

    const quizData = getValues();
    quizCardContent.post(quizData)
      .then(() => {
        navigate('/MinistryOfSmartPlay');
        return dispatch(thunks.fetchTests(id)); // Оновлюємо список тестів у Redux Store
      })
      .catch((error) => {
        console.error('Помилка при створенні тесту:', error);
      });
  };

  return (
    <FormWrap>
      <InputText
        fullWidth
        control={control}
        name='name'
        rules={testRules.quizName}
        label='Quiz name'
      />
      <InputText
        fullWidth
        control={control}
        name='description'
        rules={testRules.description}
        label='Description'
      />
      <InputText
        fullWidth
        control={control}
        name='image'
        rules={testRules.imageUrl}
        label='Image URL'
      />
      <InputText
        fullWidth
        control={control}
        name='AutorName'
        rules={testRules.quizName}
        label='Autor Name'
      />
      <GlowButton onClick={handleSubmit(onSubmit)}>
        CREATE QUIZ
      </GlowButton>
    </FormWrap>
  );
};

export default CreateQuizPage;
