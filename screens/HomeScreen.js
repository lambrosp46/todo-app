import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import TodoInput from '../components/todoInput';
import TodoList from '../components/todoList';
import { useState } from 'react';

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
  const [filter, setFilter] = useState('all');
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

      <View style={styles.filterRow}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === 'all' && styles.filterButtonActive,
          ]}
          onPress={() => setFilter('all')}
        >
          <Text
            style={[
              styles.filterText,
              filter === 'all' && styles.filterTextActive,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === 'incomplete' && styles.filterButtonActive,
          ]}
          onPress={() => setFilter('incomplete')}
        >
          <Text
            style={[
              styles.filterText,
              filter === 'incomplete' && styles.filterTextActive,
            ]}
          >
            Active
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === 'completed' && styles.filterButtonActive,
          ]}
          onPress={() => setFilter('completed')}
        >
          <Text
            style={[
              styles.filterText,
              filter === 'completed' && styles.filterTextActive,
            ]}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodoCompletion={toggleTodoCompletion}
        openTodoDetails={handleTodoPress}
        visibleTodos={visibleTodos}
        filter = {filter}
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
  filterRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 14,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 14,
    backgroundColor: '#dbe7ff',
    alignItems: 'center',
  },
  filterButtonActive: {
    backgroundColor: '#4f46e5',
  },
  filterText: {
    color: '#1f2a56',
    fontWeight: '600',
  },
  filterTextActive: {
    color: '#ffffff',
  },
});