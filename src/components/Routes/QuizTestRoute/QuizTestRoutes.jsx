import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { QuizTests } from '../../../pages/QuizTests';
import NotFound from '../../NotFound/NotFound';

export default function QuizTestRoutes() {
  return (
    <Routes>
      <Route index element={<QuizTests />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}
