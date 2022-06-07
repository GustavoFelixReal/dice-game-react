import { styled } from "@stitches/react";

const Wrapper = styled('section', {
  flex: '50%',
  padding: '9rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'all 0.75s',
});

function Player() {
  return (
    <Wrapper>
      <h2 className='name' id='name--0'>
          Jogador 1
        </h2>
        <p className='score' id='score--0'>
          43
        </p>
        <div className='current'>
          <p className='current-label'>Atual</p>
          <p className='current-score' id='current--0'>
            0
          </p>
        </div>
    </Wrapper>
  );
}

export default Wrapper;
