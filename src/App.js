import "./App.scss";
import Deck from "./components/Deck";
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
