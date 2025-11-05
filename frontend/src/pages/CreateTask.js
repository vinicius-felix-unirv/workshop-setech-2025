import React, { useState } from 'react';
import axios from 'axios';

export default function CreateTask() {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/tasks', { title });
      setTitle('');
      alert('Tarefa adicionada com sucesso!');
    } catch (err) {
      console.error(err);
      alert('Erro ao adicionar tarefa!');
    }
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2>Cadastrar Nova Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Descrição da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
