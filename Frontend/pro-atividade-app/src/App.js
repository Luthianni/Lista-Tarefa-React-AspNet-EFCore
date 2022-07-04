import "./App.css";
import Atividade from "./pages/atividades/Atividade";
import { Routes, Route } from "react-router-dom";
import Cliente from './pages/clientes/Cliente';
import Dashboard from './pages/dashboard/Dashboard';
import ClienteForm from './pages/clientes/ClienteForm';
import PageNotFound from './pages/dashboard/PageNotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/atividade/lista" element={<Atividade/>} />
      <Route path="/cliente/*" element={<Cliente/>} /> 
      <Route path="/cliente/:id/atividade" element={<Atividade/>} />     
      <Route path="/cliente/detalhe/" element={<ClienteForm/>} /> 
      <Route path="/cliente/detalhe/:id" element={<ClienteForm/>} />       
      <Route element={<PageNotFound/>} />    
    </Routes>
  );
}

