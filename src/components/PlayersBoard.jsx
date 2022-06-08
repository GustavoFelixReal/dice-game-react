import { useDice } from '../Context/DiceContext';
import Player from './Player';

function PlayersBoard() {
  const { activePlayer, scores, winner } = useDice();

  return (
    <>
      <Player
        isActive={!winner && activePlayer === 0}
        isWinner={winner === 0}
        name="Jogador 1"
        score={scores[0]}
      />
      <Player
        isActive={!winner && activePlayer === 1}
        isWinner={winner === 1}
        name="Jogador 2"
        score={scores[1]}
      />
    </>
  )
}

export default PlayersBoard;