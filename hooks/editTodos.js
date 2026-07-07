import { useState } from 'react';

export default function editTodos() {
    const [editingTodoText, setEditingTodoText] = useState('');
    const [editingTodoNotes, setEditingTodoNotes] = useState('');

    
  const editTodoTitle = (id, newTitle) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newTitle } : todo
      )
    );
  };

  const editTodoNotes = (id, newNotes) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, notes: newNotes } : todo
      )
    );
  };

  return {
    editTodoTitle,
    editTodoNotes,
  };

}