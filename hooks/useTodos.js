import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TODOS_STORAGE_KEY = '@todo_app_todos';

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [notesText, setNotesText] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem(TODOS_STORAGE_KEY);

      if (storedTodos) {
        const loadedTodos = JSON.parse(storedTodos);

        setTodos(loadedTodos);

        const maxId =
          loadedTodos.length > 0
            ? Math.max(...loadedTodos.map((todo) => Number(todo.id)))
            : 0;

        setNextId(maxId + 1);
      }
    } catch (error) {
      console.log('Failed to load todos:', error);
    } finally {
      setIsLoaded(true);
    }
  };

  loadTodos();
}, []);

useEffect(() => {
  const saveTodos = async () => {
    try {
      await AsyncStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.log('Failed to save todos:', error);
    }
  };

  if (isLoaded) {
    saveTodos();
  }
}, [todos, isLoaded]);

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