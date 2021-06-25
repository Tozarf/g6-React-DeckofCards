import { useState, useEffect } from "react";
import "./styles.scss";
import Card from "../Card";

const Deck = (props) => {
  const [state, setState] = useState({
    cards: [],
  });
  useEffect(() => {
    const call = async () => {
      const result = await fetch(`http://localhost:4001/${props.path}`);
      const { hand } = await result.json();
      setState({ cards: hand });
    };
    call();
  }, [props.path]);
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
                  key={props.title + index}
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
