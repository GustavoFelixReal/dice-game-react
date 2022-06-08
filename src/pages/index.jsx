import { DiceProvider } from "../Context/DiceContext";

import Container from "../components/Container";
import Dice from "../components/Dice";
import NewGame from "../components/NewGame";
import PlayersBoard from "../components/PlayersBoard";
import RollDice from "../components/RollDice";
import Store from "../components/Store";

const Home = () => {
  return (
    <DiceProvider>
      <Container>
        <PlayersBoard />

        <Dice />

        <NewGame />
        <RollDice />
        
        <Store />
      </Container>
    </DiceProvider>

  );
};

export default Home;
