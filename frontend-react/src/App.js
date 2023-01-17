import './App.css';
import ClientList from './components/list.component';
import CreateClient from './components/createclient.component';
import EditClient from './components/editclient.component';
import SearchClientByName from './components/searchname.component';
import SearchClientByCpf from './components/searchcpf.component';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>

      <div>
        <h3><u>Gestão de Clientes</u></h3>
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
            <li>
              <Link to ="/searchName">Buscar por nome</Link>
            </li>
            <li>
              <Link to ="/searchCpf">Buscar por CPF</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ClientList/>}/>
          <Route path="/create/client" element={<CreateClient/>}/>
          <Route path="/client/edit/:id" element={<EditClient/>}/>
          <Route path="/searchName" element={<SearchClientByName/>}/>
          <Route path="/searchCpf" element={<SearchClientByCpf/>}/>
        </Routes>

      </div>

    </Router>
  );
}

export default App;
