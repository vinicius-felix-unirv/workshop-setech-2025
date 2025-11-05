import express from 'express';
import pool from './db.js';

const router = express.Router();

// Criar tabela se não existir
const initDB = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      done BOOLEAN DEFAULT false
    )
  `);
};
initDB();



// Criar nova tarefa
router.post('/tasks', async (req, res) => {
  const { title } = req.body;
  const result = await pool.query('INSERT INTO tasks (title) VALUES ($1) RETURNING *', [title]);
  res.json(result.rows[0]);
});

// Listar todas
router.get('/tasks', async (req, res) => {
  const result = await pool.query('SELECT * FROM tasks ORDER BY id DESC');
  res.json(result.rows);
});

// Marcar/desmarcar tarefa
router.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { done } = req.body;
  await pool.query('UPDATE tasks SET done = $1 WHERE id = $2', [done, id]);
  res.json({ message: 'Task updated' });
});

export default router;