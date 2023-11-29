import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Fade,
} from '@mui/material';
import { ResultWrap } from './styled';
import ConfettiBackground from '../../components/ConfettiBackground/ConfettiBackground';
import GlowButton from '../../components/UI/GlowButton/GlowButton';

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes} хв ${remainingSeconds} сек`;
}

export default function Results() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const score = parseInt(searchParams.get('score'), 10); // Одержуємо бал як ціле число
  const totalQuestions = parseInt(searchParams.get('totalQuestions'), 10);
  const timeInSeconds = parseInt(searchParams.get('time'), 10);

  // Розрахунок відсотка правильних відповідей
  const percentage = (score / totalQuestions) * 100;

  // Додані стани для анімації, повідомлень та кнопки "Повернутися на головну"
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [message, setMessage] = useState('');

  // Включення анімації та встановлення повідомлення при завантаженні компонента
  useEffect(() => {
    setShowCongratulations(true);
    if ((!Number.isNaN(percentage))) {
      if (percentage < 50 || percentage === 0) {
        setMessage('Тест провалено, тобі треба ще багато вчитись');
      } else if (percentage >= 50 && percentage <= 85) {
        setMessage('Добре! Але ще є над чим попрацювати');
      } else {
        setMessage('Супер, ти молодець, так тримати!');
      }
    }
  }, [percentage]);

  return (
    <Container>
      <ConfettiBackground />
      <ResultWrap>
        <Typography variant="h4">Результати тесту</Typography>
        <Typography variant="body1">Загальний час: {formatTime(timeInSeconds)}</Typography>
        <Typography variant="body1">Загальний бал: {score}</Typography>

        {/* Виведення повідомлення на основі результатів тесту */}
        <Fade in={showCongratulations} timeout={2000}>
          <Typography variant="h5" style={{ color: '#000' }}>
            {message}
          </Typography>
        </Fade>

        {/* Кнопка (посилання) для повернення на головну сторінку */}
        <GlowButton variant="contained" color="primary">
          <Link to="/">Повернутися на головну</Link>
        </GlowButton>
      </ResultWrap>
    </Container>
  );
}
