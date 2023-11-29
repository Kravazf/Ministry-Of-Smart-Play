import axios from '../service';

const quizCardJs = {
  get: (id) => axios.get(`/${id}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { quizCardJs };
