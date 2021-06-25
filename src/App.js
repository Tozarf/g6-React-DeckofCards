import "./App.scss";
import Deck from "./components/Deck";

function App() {
  return (
    <div className="App">
      <Deck title="Table" path="table/" flipped="2" />
      <Deck title="Deck" path="getDeck/" flipped="2" />
    </div>
  );
}

export default App;
