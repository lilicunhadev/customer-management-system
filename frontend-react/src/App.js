import './App.css';
import ClientList from './components/list.component';
import CreateClient from './components/createclient.component';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>

      <div>
        <h3>Gestão de Clientes</h3>
      </div>

      <div>
        <nav>
          <ul>
            <li>
              <Link to ="/">Listagem de Clientes</Link>
            </li>
            <li>
              <Link to ="/create/client">Novo Cliente</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ClientList/>}/>
          <Route path="/create/client" element={<CreateClient/>}/>
        </Routes>

      </div>

    </Router>
  );
}

export default App;
