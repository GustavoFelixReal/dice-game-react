import { styled } from '@stitches/react';
import { useDice } from '../context/DiceContext';

const DiceImage = styled('img', {
  position: 'absolute !important',
  left: '50% !important',
  top: '16.5rem !important',
  transform: 'translateX(-50%) !important',
  height: '10rem !important',
  boxShadow: '0 2rem 5rem rgba(0, 0, 0, 0.2) !important'
})

function Dice() {
  const { diceNumber } = useDice()

  return (
    !!diceNumber ? (
      <DiceImage
        src={`../../images/dices/dice-${diceNumber}.png`}
        alt="Playing dice"
      />
    ) : null
  )
}

export default Dice
