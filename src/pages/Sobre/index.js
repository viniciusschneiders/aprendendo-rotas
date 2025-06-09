import { Link } from 'react-router-dom'

function Sobre() {
  return (
    <div className="App">
      <h1>Sobre a Empresa</h1>
      <br/>
      <Link to = '/'>Página Home</Link>
      <Link to = '/contato'>Página Contato</Link>

    </div>
  );
}

export default Sobre;
