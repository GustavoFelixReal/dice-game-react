import { useDice } from '../context/DiceContext';
import Button from './Button';

function RollDice() {
  const { rollDice } = useDice();

  return (
    <Button type="button" kind='roll' onClick={rollDice}>🎲 Rolar Dado</Button>
  )
}

export default RollDice;