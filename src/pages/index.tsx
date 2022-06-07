import type { NextPage } from "next";
import Button from "../components/Button";
import Dice from "../components/Dice";

const Home: NextPage = () => {
  return (
    <main>
      <section className='player player--0 player--active'>
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
      </section>
      <section className='player player--1'>
        <h2 className='name' id='name--1'>
          Jogador 2
        </h2>
        <p className='score' id='score--1'>
          24
        </p>
        <div className='current'>
          <p className='current-label'>Atual</p>
          <p className='current-score' id='current--1'>
            0
          </p>
        </div>
      </section>

      <Dice
        src='../../images/dices/dice-5.png'
        alt='Playing dice'
      />

      <Button kind='new'>🔄 Novo Jogo</Button>
      <Button kind='roll'>🎲 Rolar Dado</Button>
      <Button kind='hold'>📥 Guardar</Button>
    </main>
  );
};

export default Home;
