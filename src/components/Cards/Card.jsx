/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  CardContent,
  Tooltip,
  Typography,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalWindow from '../Modal/ModalWindow';
import {
  CardAction,
  StyledCard,
  StyledCardMedia,
} from './styled';
import thunks from '../../store/services/tests/thunks';
import MagnetButton from '../UI/MagnetButton/MagnetButton';

export default function CardItem({
  test,
  name,
  img,
  title,
  description,
  handleNavigate,
}) {
  const [isShowModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const showDeleteButton = test && test.AutorName;
  const handleDelete = () => {
    if (test && test.id) {
      dispatch(thunks.deleteTest(test.id));
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const updateFavorite = () => {
    dispatch(thunks.toggleFavorite(test.id));
  };

  return (
    <>
      <StyledCard>
        <StyledCardMedia
          component='img'
          alt={name}
          src={img}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            style={{
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
          >
          {typeof title === 'string' ? title.slice(0, 100) : ''}
          </Typography>
        </CardContent>
        <CardAction>
          <MagnetButton onClick={() => handleNavigate(name)}>
            START
          </MagnetButton>
          <MagnetButton onClick={handleShowModal}>
            SHOW
          </MagnetButton>
          <StarIcon
            onClick={(updateFavorite)}
            style={{
              position: 'absolute',
              top: '210px',
              left: '5px',
              cursor: 'pointer',
              color: test.Favorite ? 'rgb(0, 220, 130)' : 'rgb(37, 40, 57)',
            }}
          />
          {showDeleteButton && (
          <Tooltip title="Delete">
            <DeleteIcon
              size='small'
              onClick={handleDelete}
              style={{
                position: 'absolute',
                top: '210px',
                right: '5px',
                fontSize: '25px',
                color: 'red',
                cursor: 'pointer',
              }}
            />
          </Tooltip>
          )}
        </CardAction>
      </StyledCard>
      {isShowModal && (
        <ModalWindow
          open={isShowModal}
          onClose={handleCloseModal}
          title={title}
          image={img}
          description={description}
          name={name} // Передаємо name в ModalWindow
          handleNavigate={handleNavigate} // Передаємо handleNavigate в ModalWindow
        >
          <Typography gutterBottom>
            {description}
          </Typography>
        </ModalWindow>
      )}
    </>
  );
}
