import './App.css';
import ClientList from './components/list.component';
import CreateClient from './components/createclient.component';
import EditClient from './components/editclient.component';
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
          <Route path="/client/edit/:id" element={<EditClient/>}/>
        </Routes>

      </div>

    </Router>
  );
}

export default App;
