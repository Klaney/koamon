let f = require("isomorphic-fetch");
let P = require("pokeapi-js-wrapper");
let myInit = {
  method: "GET",
  cache: "default"
};

async function getPokemon(apiServer, pokedexNumber) {
  const response = await fetch(`${apiServer}/pokeapi/pokemon/${pokedexNumber}`);
  const body = await response.json();
  // console.log(body);
  return body;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: {} };
  }
  static async getInitialProps({ req }) {
    const apiServer = "http://localhost:3001";
    return { apiServer };
  }

  async componentDidMount() {
    const body = await getPokemon(this.props.apiServer, 1);
    this.setState({ pokemon: body });
  }
  render() {
    return (
      <div>
        <h1>hello world</h1>
        <pre className="pokemonName">
          <style jsx>{`
            .pokemonName {
              border: 2px solid red;
            }
          `}</style>
          {JSON.stringify(this.state.pokemon.name, null, 2)}
        </pre>
      </div>
    );
  }
}

export default Page;
