import { styled } from "@stitches/react";
import { useDice } from "../context/DiceContext";
import Current from "./Current";

const Wrapper = styled('section', {
  flex: '50%',
  padding: '9rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'all 0.75s',

  '.name': {
    position: 'relative',
    fontSize: '4rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    wordpaScing: '2px',
    fontWeight: 300,
    marginBottom: '1rem',
  },

  '.score': {
    fontSize: '8rem',
    fontWeight: 300,
    color: '#c7365f',
    marginBottom: 'auto',
  },

  variants: {
    isActive: {
      true: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',

        '& .name': {
          fontWeight: 700,
        },

        '& .score': {
          fontWeight: 400,
        },

        [`& ${Current}`]: {
          opacity: 1,
        }
      }
    },

    isWinner: {
      true: {
        backgroundColor: '#2f2f2f',

        '& .name': {
          fontWeight: 700,
          color: '#c7365f',
        }
      }
    }
  }
});

function Player({ name, score, isActive, ...props }) {
  const { currentScore } = useDice();

  return (
    <Wrapper isActive={isActive} {...props}>
      <h2 className='name'>
        {name}
      </h2>
      <p className='score'>
        {score}
      </p>

      {isActive && (
        <Current>
          {currentScore}
        </Current>
      )}
    </Wrapper>
  );
}

export default Player;
