/* eslint-disable no-console */
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Accordion,
  AccordionDetails,
  Grid,
  CircularProgress,
} from '@mui/material';
import { quizCardJs } from '../../api/js/js';
import { quizCardTests } from '../../api/tests/tests';
import { HeaderContainer, QuizImage } from './styled';
import GlowButton from '../../components/UI/GlowButton/GlowButton';

export default function QuizPage() {
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizTimeLeft, setQuizTimeLeft] = useState(1500); // 25 хвилин у секундах
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [computedScore, setComputedScore] = useState(0); // Зберігаємо бали

  const getQuizApi = (id) => (id === 'js' ? quizCardJs : quizCardTests);

  const handleAnswerChange = (option) => {
    // Перевірка, чи відповідь вже вибрана
    if (selectedAnswers.includes(option)) {
      // Якщо вже вибрана, видаляємо її зі списку вибраних
      setSelectedAnswers(selectedAnswers.filter((answer) => answer !== option));
    } else {
      // Якщо ще не вибрана, додаємо її до списку вибраних
      setSelectedAnswers([...selectedAnswers, option]);
      // Перевіряємо, чи це правильна відповідь
      const currentQuizQuestion = quizData?.question?.[currentQuestion];
      if (currentQuizQuestion?.correctAnswer && currentQuizQuestion.correctAnswer.includes(option)) {
        // Якщо це правильна відповідь, збільшуємо бали на 1
        setComputedScore(computedScore + 1);
      }
    }
  };

  const fetchQuizData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await getQuizApi(id).get(id);
      if (Array.isArray(response) && response.length > 0) {
        setQuizData(response[0]);
        console.log(response);
      } else {
        setError("Об'єкт не знайдено");
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Сталася помилка завантаження даних');
    } finally {
      setLoading(false);
    }
  }, [setQuizData, setLoading, setError, id]);

  useEffect(() => {
    fetchQuizData();
  }, [fetchQuizData]);

  const handleNextQuestion = () => {
    if (currentQuestion < (quizData?.question?.length || 0) - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Завершення вікторини
      // Перехід на сторінку результатів
      navigate(`/results?score=${computedScore}&time=${25 * 60 - quizTimeLeft}
      &totalQuestions=${quizData?.question?.length || 0}`);
    }
  };

  useEffect(() => {
    // Код, який оновлює лічильник часу, включаючи перехід на сторінку результатів
    const timer = setInterval(() => {
      if (quizTimeLeft > 0) {
        setQuizTimeLeft(quizTimeLeft - 1);
      } else {
        // Час вийшов, перехід на сторінку результатів
        clearInterval(timer);
        navigate(`/results?score=${computedScore}&time=${25 * 60}`);
      }
    }, 1000);
    return () => {
      clearInterval(timer); // При зміні компонента очистити інтервал
    };
  }, [quizTimeLeft, navigate, computedScore]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const currentQuizQuestion = quizData?.question?.[currentQuestion];

  const formatTime = () => {
    const minutes = Math.floor(quizTimeLeft / 60);
    const seconds = quizTimeLeft % 60;
    return `${minutes} хв ${seconds} с`;
  };

  return (
    <Container>
      <HeaderContainer>
        {quizData ? (
          <>
            <QuizImage src={quizData.image} alt="Вікторина" />
            <Typography variant="body1">Час: {formatTime()}</Typography>
            <Typography variant="body1">
              Питання {currentQuestion + 1} із {(quizData?.question?.length || 0)}
            </Typography>
          </>
        ) : (
          <CircularProgress />
        )}
      </HeaderContainer>
      <div className="quiz">
        {currentQuizQuestion ? (
          <>
            <Card>
              <CardContent>
                <Typography variant="body1">{currentQuizQuestion.questionText}</Typography>
                <Accordion>
                  <AccordionDetails>
                    <Grid container spacing={2}>
                      {currentQuizQuestion.options.map((option, index) => (
                        <Grid item xs={6} key={index}>
                          <label>
                            <input
                              type="checkbox"
                              checked={selectedAnswers.includes(option)}
                              onChange={() => handleAnswerChange(option)}
                            />
                            {option}
                          </label>
                        </Grid>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
            <GlowButton onClick={handleNextQuestion}
            >
              {currentQuestion < (quizData?.question?.length || 0) - 1 ? 'Next' : 'Finish'}
            </GlowButton>
          </>
        ) : (
          <p>Питання не знайдено або вікторина завершена.</p>
        )}
      </div>
    </Container>
  );
}
