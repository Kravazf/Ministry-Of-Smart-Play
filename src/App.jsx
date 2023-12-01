import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Template from './components/Templates/Template';
import QuizTestRoutes from './components/Routes/QuizTestRoute/QuizTestRoutes';
import QuizPage from './pages/QuizPage/QuizPage';
import NotFound from './components/NotFound/NotFound';
import Results from './pages/Results/Results';
import store from './store';
import LoginForm from './pages/LoginForm/LoginForm';
import RegisterForm from './pages/RegisterForm/RegisterForm';
import CreateQuizPage from './pages/CreateQuizPage/CreateQuizPage';
import { FavoriteQuiz } from './pages/FavoriteQuiz';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
      <Routes>
          <Route path='/' element={<Template />}>
            <Route index element={<QuizTestRoutes />} />
            <Route path='/quiz-test/:id' element={<QuizPage />} />
            <Route path='/results' element={<Results />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/create' element={<CreateQuizPage />} />
            <Route path='/favorite' element={<FavoriteQuiz />} />
            <Route path='/QuizTest/:QuizTest' element={<QuizPage />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
