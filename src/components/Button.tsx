import { styled } from '@stitches/react';

const Button = styled('button', {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  color: '#444',
  background: 'none',
  border: 'none',
  fontFamily: 'inherit',
  fontSize: '1.8rem',
  textTransform: 'uppercase',
  cursor: 'pointer',
  fontWeight: '400',
  transition: 'all 0.2s',

  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(10px)',

  padding: '0.7rem 2.5rem',
  borderRadius: '50rem',
  boxShadow: '0 1.75rem 3.5rem rgba(0, 0, 0, 0.1)',

  '&::first-letter': {
    fontSize: '2.4rem',
    display: 'inline-block',
    marginRight: '0.7rem'
  },

  '&:active': {
    transform: 'translate(-50%, 3px)',
    boxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.15)'
  },

  '&:focus': {
    outline: 'none'
  },

  variants: {
    kind: {
      new: {
        top: '4rem'
      },
      roll: {
        top: '39.3rem'
      },
      hold: {
        top: '46.1rem'
      }
    }
  }
});

export default Button;