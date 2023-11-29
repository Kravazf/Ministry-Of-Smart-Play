import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Template from './components/Templates/Template';
import QuizTestRoutes from './components/Routes/QuizTestRoute/QuizTestRoutes';
import QuizPage from './pages/QuizPage/QuizPage';
import NotFound from './components/NotFound/NotFound';
import Results from './pages/Results/Results';
import store from './store';
import LoginForm from './pages/LoginForm/LoginForm';
import RegisterForm from './pages/RegisterForm/RegisterForm';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Template />}>
            <Route index element={<QuizTestRoutes />} />
            <Route path='/MinistryOfSmartPlay/*' element={<QuizTestRoutes />} />
            <Route path='/MinistryOfSmartPlay/QuizTest/:id' element={<QuizPage />} />
            <Route path='/results' element={<Results />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/register' element={<RegisterForm />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
