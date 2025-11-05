import React from 'react';

export default function TaskItem({ task, onToggle }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
      <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id, task.done)} />
      <span style={{ textDecoration: task.done ? 'line-through' : 'none', color: task.done ? '#777' : '#000' }}>
        {task.title}
      </span>
    </div>
  );
}
