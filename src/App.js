import React from "react";
import "./App.css";

class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }
  componentDidMount() {
    (async () => {
      let cards = await (
        await fetch(`http://localhost:4001/${this.props.path}`)
      ).json();
      this.setState({ cards });
    })();
  }
  render() {
    return (
      <div>
        {this.state.cards.length === 0 ? (
          <div> Loading... </div>
        ) : this.props.title === "Table" ? (
          <div className="deck"> {this.state.cards.deck.map((card) => {
                     const number = card.slice(0, -1);
                     const symbol = card.slice(-1)} </div>
        ) : (
          <div> Hand</div>
        )}
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Deck title="Table" path="table/" />
        <Deck title="Deck" path="getDeck/" />
      </header>
    </div>
  );
}

export default App;

// {
//   /* <div className="deck"> {this.state.cards.map((card) => {
//             const number = card.slice(0, -1);
//             const symbol = card.slice(-1); */
// }
