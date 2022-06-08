import { createContext, useCallback, useContext, useEffect, useState } from "react";

const DiceContext = createContext({});

export function DiceProvider({ children }) {
  const [activePlayer, setActivePlayer] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [diceNumber, setDiceNumber] = useState(0);
  const [isGameActive, setIsGameActive] = useState(true);
  const [scores, setScores] = useState([0, 0]);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    scores.forEach((score, index) => {
      if (score >= 100) {
        setWinner(index);
        setIsGameActive(false);
        return;
      }
    })
  }, [scores]);

  const increaseScore = useCallback((player, amount) => {
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
