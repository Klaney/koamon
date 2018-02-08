let f = require("isomorphic-fetch");
let P = require("pokeapi-js-wrapper");
// let Pokedex = new P.Pokedex();
let myInit = {
  method: "GET",
  cache: "default"
};

async function getPokemon(name) {
  const response = await f("http://pokeapi.co/api/v2/pokemon/1", myInit);
  const body = await response.json();
  // console.log(body);
  return body;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: {} };
  }
  async componentDidMount() {
    const response = await fetch(
      "https://cors.now.sh/https://pokeapi.co/api/v2/pokemon/1",
      myInit
    );
    console.log(response);
    const body = await response.json();
    this.setState({ pokemon: body });
  }
  render() {
    return (
      <div>
        <h1>hello world</h1>
        <pre>{JSON.stringify(this.state.pokemon.name, null, 2)}</pre>
      </div>
    );
  }
}

export default Page;
