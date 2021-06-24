import { useState, useEffect } from "react";
import "./styles.scss";
import Card from "../Card";

const Deck = (props) => {
  const [state, setState] = useState({
    cards: [],
  });
  const call = async () => {
    const result = await fetch(`http://localhost:4001/${props.path}`);
    const { hands } = await result.json();
    setState({ cards: hands[0] }); //verificar cambio
    console.log(hands[0]);
  };
  useEffect(() => {
    call();
  }, [props.path]);
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div>
      {state.cards.length === 0 ? (
        <div> Loading... </div>
      ) : (
        <div>
          <h2> {props.title}</h2>
          <div className="deck">
            {" "}
            {state.cards.map((card, index) => {
              const number = card.slice(0, -1);
              const symbol = card.slice(-1);
              return (
                <Card
                  symbol={symbol}
                  number={number}
                  key={index}
                  flipped={parseInt(props.flipped) > index}
                />
              );
            })}{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Deck;
