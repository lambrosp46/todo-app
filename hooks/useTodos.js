import { useState } from 'react';

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [notesText, setNotesText] = useState('');
  const [nextId, setNextId] = useState(1);

  const addTodo = () => {
    if (inputText.trim() === '') return;
    
    const newTodoItem = {
      id: nextId,
      text: inputText,
      notes: notesText,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodoItem]);
    setInputText('');
    setNotesText('');
    setNextId((prevId) => prevId + 1);


  };

  const deleteTodo = (id) => { 
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  const toggleTodoCompletion = (id) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
    
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
    todos,
    inputText,
    notesText,
    setInputText,
    setNotesText,
    addTodo,
    deleteTodo,
    toggleTodoCompletion,
    editTodoTitle,
    editTodoNotes,
  };
}