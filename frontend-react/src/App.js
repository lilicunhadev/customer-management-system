//import logo from './logo.svg';
import './App.css';
import ClientList from './components/list.component';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>

      <div>
        <nav>
          <ul>
            <li>
              <Link to ="/">Clientes</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ClientList/>}/>
        </Routes>

      </div>

    </Router>
  );
}

export default App;
