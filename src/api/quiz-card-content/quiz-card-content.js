import axios from '../service';

const quizCardContent = {
  get: () => axios.get('/quiz-card-content')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  post: (params) => axios.post('/quiz-card-content', params)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  delete: (id) => axios.delete(`/quiz-card-content/${id}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  update: (id, updatedData) => axios.put(`/quiz-card-content/${id}`, updatedData)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { quizCardContent };
