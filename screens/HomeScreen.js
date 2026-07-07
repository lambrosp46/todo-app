import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import TodoInput from '../components/todoInput';
import TodoList from '../components/todoList';

export default function HomeScreen({
  navigation,
  todos,
  inputText,
  notesText,
  setInputText,
  setNotesText,
  addTodo,
  deleteTodo,
  toggleTodoCompletion,
}) {
  const [filter, setFilter] = React.useState('all');
  const sortedTodos = [...todos].sort((a,b) => {return Number(a.completed) - Number(b.completed)});
  
  const visibleTodos = sortedTodos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true; // for 'all' filter
  });

  const handleTodoPress = (id) => {
    navigation.navigate('TodoDetails', { todoId: id });
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
        notesText={notesText}
        setNotesText={setNotesText}
      />

      <View style={styles.container}>
          <TouchableOpacity onPress={() => setFilter('all')}>
            <Text style={[styles.filterText, styles.filterButtonActive]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFilter('completed')}>
            <Text style={styles.filterText}>Completed</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFilter('incomplete')}>
            <Text style={styles.filterText}>Incomplete</Text>
          </TouchableOpacity>
      </View>

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodoCompletion={toggleTodoCompletion}
        openTodoDetails={handleTodoPress}
        visibleTodos={visibleTodos}
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