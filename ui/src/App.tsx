import * as React from "react";
import "./App.css";
import Header from "./Components/Layout/Header";
import RenderSinglePokemon from "./Components/Pokemon/index";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RenderSinglePokemon />
      </div>
    );
  }
}

export default App;
