import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClienteList from './pages/cliente/ClienteList';
import ClienteForm from './pages/cliente/ClienteForm';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClienteList />} />
        <Route path="/clientes" element={<ClienteList />} />
        <Route path="/clientes/cadastro" element={<ClienteForm />} />
        <Route path="/clientes/editar/:id" element={<ClienteForm />} />
      </Routes>
    </Router>
  );
}


export default App;

