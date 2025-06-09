import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <h1>Bem vindo a pagina Home</h1>
      <span>Vinicius Schneider Programador JS</span>
      <br/><br/>
      <Link to='/sobre'>Sobre</Link>
      <Link to= '/contato'>Contato</Link>

    </div>
  );
}

export default Home;
