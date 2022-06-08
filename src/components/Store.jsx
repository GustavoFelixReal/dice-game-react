import { useDice } from '../Context/DiceContext';
import Button from './Button';

function Store() {
  const { holdValue } = useDice();

  return (
    <Button type="button" kind='hold' onClick={holdValue}>📥 Guardar</Button>
  )
}

export default Store;