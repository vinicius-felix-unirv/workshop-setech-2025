import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateTask from './pages/CreateTask';
import ListTasks from './pages/ListTasks';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: '20px', padding: '15px', background: '#f0f0f0' }}>
        <Link to="/">TESTE</Link>
        <Link to="/listar">Listar</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CreateTask />} />
        <Route path="/listar" element={<ListTasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
