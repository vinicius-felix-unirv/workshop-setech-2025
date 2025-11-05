import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from '../components/TaskItem';

export default function ListTasks() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/api/tasks');
    setTasks(res.data);
  };

  const toggleDone = async (id, done) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, { done: !done });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: '30px' }}>
      <h2>Lista de Tarefas</h2>
      {tasks.length === 0 && <p>Nenhuma tarefa cadastrada.</p>}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={toggleDone} />
      ))}
    </div>
  );
}
