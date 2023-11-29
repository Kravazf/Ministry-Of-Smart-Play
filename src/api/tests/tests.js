import axios from '../serviceTests';

const quizCardTests = {
  get: (id) => axios.get(`/${id}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { quizCardTests };
