import { useState } from "react";

import "./styles.scss";

const Card = (props) => {
  const isNumber = !isNaN(props.number);
  const [isFlipped, setIsFlipped] = useState(props.flipped);
  return (
    <div
      onClick={() => {
        setIsFlipped(!isFlipped);
      }}
      className={["card", isFlipped ? "flipped" : "", props.symbol]
        .filter(Boolean)
        .join(" ")}
      number={props.number}
    >
      <div className="container">
        <div className="front">
          <div className="card-corner top-left">
            <div> {props.number}</div>
            <div> {props.symbol}</div>
          </div>
          <div className="symbols">
            {props.number === "A" && (
              <div className="symbol_A"> {props.symbol}</div>
            )}
            {["J", "Q", "K"].includes(props.number) && (
              <div className="image"></div>
            )}
            {isNumber &&
              new Array(parseInt(props.number))
                .fill(props.symbol)
                .map((cardSymbol, index) => (
                  <div key={index + props.number + props.symbol}>
                    {cardSymbol}
                  </div>
                ))}
          </div>
          <div className="card-corner bottom-right">
            <div>{props.number}</div>
            <div>{props.symbol}</div>
          </div>
        </div>
        <div className="back"></div>
      </div>
    </div>
  );
};

export default Card;
