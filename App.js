import useTodos from './hooks/useTodos';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const {
    todos,
    inputText,
    notesText,
    setInputText,
    setNotesText,
    addTodo,
    deleteTodo,
    toggleTodoCompletion,
  } = useTodos();

  return (
    <HomeScreen
      todos={todos}
      inputText={inputText}
      notesText={notesText}
      setInputText={setInputText}
      setNotesText={setNotesText}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      toggleTodoCompletion={toggleTodoCompletion}
    />
  );
}