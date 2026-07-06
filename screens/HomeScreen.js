import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TodoInput from '../components/todoInput';
import TodoList from '../components/todoList';

export default function HomeScreen({
  todos,
  inputText,
  notesText,
  setInputText,
  setNotesText,
  addTodo,
  deleteTodo,
  toggleTodoCompletion,
}) {
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
        notesText={notesText}
        setNotesText={setNotesText}
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