import React, { useState, useEffect } from "react";
import "./App.css";

const Card = (props) => {
  const isNumber = !isNaN(props.number);
  const [isFlipped, setIsFlipped] = useState(props.flipped);
  return (
    <div
      onClick={() => {
        setIsFlipped(!isFlipped);
      }}
      className={["card", isFlipped ? "flipped" : ""].filter(Boolean).join(" ")}
    >
      <div className="container">
        <div className="front">
          <div className="card-corner">
            <div> {props.number}</div>
            <div> {props.symbol}</div>
          </div>
          <div className="symbols">
            {props.number === "A" && <div> {props.symbol}</div>}
            {["J", "Q", "K"].includes(props.number) && (
              <div className="image"></div>
            )}
            {isNumber &&
              new Array(parseInt(props.number))
                .fill(props.symbol)
                .map((cardSymbol, key) => (
                  <div key={key} className="cardsymbol">
                    {cardSymbol}
                  </div>
                ))}
          </div>
          <div className="card-corner">
            <div>{props.number}</div>
            <div>{props.symbol}</div>
          </div>
        </div>
        <div className="back"></div>
      </div>
    </div>
  );
};

const Deck = (props) => {
  const [state, setState] = useState({
    cards: [],
  });

  useEffect(() => {
    const call = async () => {
      const result = await fetch(`http://localhost:4001/${props.path}`);
      const fetchedCards = await result.json();

      setState({ cards: fetchedCards });
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

// class Deck extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cards: [],
//     };
//   }

//   componentDidMount() {
//     (async () => {
//       let cards = await (
//         await fetch(`http://localhost:4001/${this.props.path}`)
//       ).json();
//       this.setState({ cards });
//     })();
//   }
//   render() {
//     return (
//       <div>
//         {this.state.cards.length === 0 ? (
//           <div> Loading... </div>
//         ) : (
//           <div>
//             <h2> {this.props.title}</h2>
//             <div className="deck">
//               {" "}
//               {this.state.cards.map((card, index) => {
//                 const number = card.slice(0, -1);
//                 const symbol = card.slice(-1);
//                 return (
//                   <Card
//                     symbol={symbol}
//                     number={number}
//                     key={index}
//                     flipped={parseInt(this.props.flipped) > index}
//                   />
//                 );
//               })}{" "}
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div className="App">
      <Deck title="Table" path="table/" />
      <Deck title="Deck" path="getDeck/" />
    </div>
  );
}

export default App;
