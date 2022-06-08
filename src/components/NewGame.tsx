import { useDice } from '../context/DiceContext';
import Button from './Button';

function NewGame() {
  const { resetGame } = useDice();

  return (
    <Button type="button" kind='new' onClick={resetGame}>🔄 Novo Jogo</Button>
  )
}

export default NewGame;