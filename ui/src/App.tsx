import * as React from "react";
import "./App.css";
import Header from "./Components/Layout/Header";
import RenderSinglePokemon from "./Components/Pokemon/index";
import TeamPage from "./Pages/TeamPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RenderSinglePokemon />
        <TeamPage teamId={1} />
      </div>
    );
  }
}

export default App;
