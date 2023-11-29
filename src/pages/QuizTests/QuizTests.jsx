/* eslint-disable no-console */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import CardItem from '../../components/Cards/Card';
import thunks from '../../store/services/tests/thunks';
import { CenteredItem, ScrollableContainer } from './styled';

export default function QuizTests() {
  const { tests, filteredTests, filter } = useSelector((state) => state.testsReduser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const quizCardContentList = useMemo(() => (filter ? filteredTests : tests), [filter, filteredTests, tests]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const fetchQuizCardContentList = useCallback(async () => {
    setLoading(true);

    try {
      await dispatch(thunks.fetchTests(id));
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [id, dispatch, setLoading, setError]);

  useEffect(() => {
    fetchQuizCardContentList();
  }, [fetchQuizCardContentList]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleNavigate = (name) => {
    const params = name.replaceAll(' ', '_').toLowerCase();
    navigate(`/MinistryOfSmartPlay/QuizTest/${params}`);
    console.log(params);
  };

  return (
    <ScrollableContainer>
    <Grid container spacing={2}>
      {Array.isArray(quizCardContentList) && quizCardContentList.length > 0 ? (
        quizCardContentList.map((quizCardContent) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={quizCardContent.id}>
            <CardItem
              test={quizCardContent}
              name={quizCardContent.name}
              img={quizCardContent.image}
              title={quizCardContent.description}
              handleNavigate={handleNavigate}
              isModalOpen={isModalOpen}
              openModal={openModal}
              closeModal={closeModal}
            />
          </Grid>
        ))
      ) : (
        <CenteredItem item xs={12}>
          <Typography variant="h5">Quiz not found!</Typography>
        </CenteredItem>
      )}
    </Grid>
    </ScrollableContainer>
  );
}
