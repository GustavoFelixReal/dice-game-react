import { createContext, useCallback, useContext, useEffect, useState } from "react";

interface IDiceContext {
  activePlayer: number
  currentScore: number
  diceNumber: number
  scores: Array<number>
  winner: number | null
  holdValue: () => void
  increaseScore: (player: number, amount: number) => void
  resetGame: () => void
  rollDice: () => void
}

interface IDiceProvider {
  children: React.ReactNode
}

const DiceContext = createContext({} as IDiceContext);

export function DiceProvider({ children }: IDiceProvider) {
  const [activePlayer, setActivePlayer] = useState(0); //Tipagem por inferência
  const [currentScore, setCurrentScore] = useState(0);
  const [diceNumber, setDiceNumber] = useState(0);
  const [isGameActive, setIsGameActive] = useState(true);
  const [scores, setScores] = useState([0, 0]);
  const [winner, setWinner] = useState<number | null>(null); //Tipagem por definição

  useEffect(() => {
    scores.forEach((score, index) => {
      if (score >= 100) {
        setWinner(index);
        setIsGameActive(false);
        return;
      }
    })
  }, [scores]);

  const increaseScore = useCallback((player: number, amount: number) => {
    if (isGameActive) {
      setScores(scores => {
        const updatedScores = [...scores];

        updatedScores[player] += amount;

        return updatedScores;
      });
    }
  }, [isGameActive]);

  const holdValue = useCallback(() => {
    if (isGameActive) {
      increaseScore(activePlayer, currentScore);

      switchPlayer();
    }
  }, [activePlayer, currentScore, isGameActive, scores]);

  const resetGame = useCallback(() => {
    setActivePlayer(0);
    setCurrentScore(0);
    setDiceNumber(0);
    setIsGameActive(true);
    setScores([0, 0]);
    setWinner(null);
  }, []);

  const rollDice = useCallback(() => {
    if (isGameActive) {
      const sortedNumber = Math.trunc(Math.random() * 6) + 1;

      setDiceNumber(sortedNumber);

      if (sortedNumber !== 1) {
        setCurrentScore(currentScore => currentScore + sortedNumber);
        return;
      }

      switchPlayer();
    }
  }, [isGameActive]);

  const switchPlayer = useCallback(() => {
    setCurrentScore(0);

    setActivePlayer(activePlayer => activePlayer === 0 ? 1 : 0);
  }, []);

  return (
    <DiceContext.Provider value={{ activePlayer, currentScore, diceNumber, scores, winner, holdValue, increaseScore, resetGame, rollDice }}>
      {children}
    </DiceContext.Provider>
  );
}

export function useDice() {
  return useContext(DiceContext);
}
