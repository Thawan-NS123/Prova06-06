import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Seja Bem-Vindo para onde você quer ir?</h1>
      <Link to='/cadastrar'>cadastrar</Link>
      <Link to='/consultar'>cconsultar</Link>
    </div>
  );
}

export default App;
