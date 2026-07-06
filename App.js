import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useState } from 'react';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(1);

  const addTodo = () => {
    if (inputText.trim() === '') return;
    
    const newTodoItem = {
      id: nextId,
      text: inputText,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodoItem]);
    setInputText('');
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Todo App</Text>
        <Text style={styles.subtitle}>Keep track of your tasks in a clean list.</Text>
      </View>

      <TodoInput
        inputText={inputText}
        setInputText={setInputText}
        addTodo={addTodo}
      />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodoCompletion={toggleTodoCompletion}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2ff',
    paddingTop: 24,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1f2a56',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#556680',
    lineHeight: 22,
  },
});
