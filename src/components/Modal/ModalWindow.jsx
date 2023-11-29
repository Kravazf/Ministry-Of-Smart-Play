import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {
  DialogAction,
  StyledBorderModalWindow,
  StyledDialogTitle,
} from './styled';
import GlowButton from '../UI/GlowButton/GlowButton';

export default function ModalWindow({
  name,
  open,
  onClose,
  title,
  image,
  description,
  timeEstimate = 10,
  handleNavigate,
}) {
  const handleClose = () => {
    onClose();
  };

  const handleStartQuiz = () => {
    handleClose();
    handleNavigate(name);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <StyledBorderModalWindow>
        <StyledDialogTitle>
          <DialogTitle>
            {title}
            <IconButton
              aria-label='close'
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'white',
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <img
            src={image}
            alt={title}
            style={{
              maxHeight: '400px',
              width: '90%',
            }}
            />
            <p>{description}</p>
            <p>TIME ESTIMATE: {timeEstimate} MINUTES</p>
          </DialogContent>
          <DialogAction>
            <GlowButton onClick={handleStartQuiz}>
              START QUIZ
            </GlowButton>
          </DialogAction>
        </StyledDialogTitle>
      </StyledBorderModalWindow>
    </Dialog>
  );
}
