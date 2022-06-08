import { styled } from "@stitches/react";

interface ICurrent {
  children: React.ReactNode
}

const Wrapper = styled('div', {
  backgroundColor: '#c7365f',
  opacity: 0.8,
  borderRadius: '9px',
  color: '#fff',
  width: '65%',
  padding: '2rem',
  textAlign: 'center',
  transition: 'all 0.75s',

  '.current-label': {
    textTransform: 'uppercase',
    marginBottom: '1rem',
    fontSize: '1.7rem',
    color: '#ddd',
  },

  '.current-score': {
    fontSize: '3.5rem',
  },
});

function Current({ children }: ICurrent) {

  return (
    <Wrapper>
      <p className='current-label'>Atual</p>
      <p className='current-score' id='current--0'>
        {children}
      </p>
    </Wrapper>
  );
}

Current.toString = () => '.current'

export default Current;
